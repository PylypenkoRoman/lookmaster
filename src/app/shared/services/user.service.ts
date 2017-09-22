import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router'
import * as firebase from 'firebase';
import { AngularFireDatabase } from "angularfire2/database";
import * as Rx from 'rxjs';

@Injectable()
export class UserService {
  authState: any = null;
  userRole;
  userLoggedIn: boolean = false;

  constructor( private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router:Router) { 
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
   });
   this.getCurrentUserRole()
  };

  getAuthenticated(): boolean {
    return this.authState !== null;
  }

  getCurrentUser(): any {
    return this.getAuthenticated ? this.authState : null;
  }

  getCurrentUserObservable(): any {
    return this.afAuth.authState
  }

  getCurrentUserId(): string {
    return this.getAuthenticated ? this.authState['uid'] : '';
  }
  
  getCurrentUserDisplayName(): string {
    if (!this.authState) { return 'Guest' }
    else { return this.authState['displayName'] || 'User without a Name' }
  }

  getCurrentUserRole(){
    if(!this.authState) { return 'Mister Nobody' }
    let currentUserId = firebase.auth().currentUser.uid
    let dbRef = firebase.database().ref('users/' + currentUserId);
    dbRef.once('value')
        .then((snapshot)=> {
        this.userRole = snapshot.val().userRole; 
      });
  }
  

  login(email:string, password:string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          this.authState = user
        })
        .catch(error => console.log(error));
   }
    
   register(email: string, password: string, userName: string){
    var user
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () {
      user = firebase.auth().currentUser;
      console.log("1")
    })
    .then(function () {
      user.updateProfile({
        displayName: userName
      });
      console.log("2")
    })
    .then((user) => {
      this.createUserObject()
      console.log("3")
    })
    .catch(function(error){
      alert(`${error.message} Please Try Again!`)
    })

    console.log('Validation link was sent to ' + email + '.');
  }

  createUserObject(){
    console.log("start creation of")
    let currentUser = firebase.auth().currentUser
    console.log(currentUser)
    console.log(currentUser.displayName)
    console.log(currentUser.uid)
    firebase.database().ref('users/' + currentUser.uid).set({
      id: currentUser.uid,
      userRole: localStorage.getItem('savedUserRole'),
      userName: currentUser.displayName,
      email: "",
      phone: "",
      city: "",
      about: "",
      payType: "EUR",
      salonAddress: "",
      homeAddress: "",
      workAtClientHome: false
    }).catch(function(error){
        alert(`${error.message} Unable to create User Object`)
      })
  };

  logout(): void {
      this.afAuth.auth.signOut();
      this.authState = null;
      this.router.navigate(['/'])
  }

  // constructor( private router: Router) { 
  //   const userKey = Object.keys(window.localStorage).filter(it => it.startsWith('firebase:authUser'))[0];
  //   const user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;
  // };


  verifyLogin(url: string): boolean {
    if(this.userLoggedIn) {return true;}
    this.router.navigate(['/login']);
    return false
  }


  createMasterCard(){
    let currentUserId = firebase.auth().currentUser.uid
    let dbRef = firebase.database().ref('masterCards/');
    let newMaster = dbRef.push();
    newMaster.set({
      userId: currentUserId,
      masterId: newMaster.key,
    });
  };

};
