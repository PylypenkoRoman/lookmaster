import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router'
import * as firebase from 'firebase';
import { AngularFireDatabase } from "angularfire2/database";
import * as Rx from 'rxjs';

@Injectable()
export class UserService {
  currentUser
  authState;
  userRole;

  constructor( private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router:Router) { 
    this.getCurrentUser()
    this.getCurrentUserRole()
  };

  getCurrentUser(){
    if(this.currentUser){ 
      console.log(" we have this current user")
      console.log(this.currentUser)
      console.log("---------------------------------------")
      return this.currentUser
    }
    var userKey = Object.keys(window.localStorage).filter(it => it.startsWith('firebase:authUser'))[0];
    this.currentUser = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;
    console.log(" new one")
    console.log(this.currentUser)
    console.log("---------------------------------------")
    return this.currentUser
  }

  getAuthenticated(): boolean {
    return this.authState !== null;
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
    })
    .then(function () {
      user.updateProfile({
        displayName: userName
      });
    })
    .then((user) => {
      this.createUserObject()
    })
    .catch(function(error){
      alert(`${error.message} Please Try Again!`)
    })
    console.log('Validation link was sent to ' + email + '.');
  }

  createUserObject(){
    console.log("start creation of")
    let currentUser = firebase.auth().currentUser
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
      console.log("logout")
      this.currentUser = null
      console.log(this.currentUser)
      this.router.navigate(['/'])
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
