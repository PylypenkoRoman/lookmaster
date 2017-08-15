import { Injectable } from '@angular/core';
import { CanActivate,
          Router,
          ActivatedRouteSnapshot,
          RouterStateSnapshot 
       } from '@angular/router'
import * as firebase from 'firebase';

@Injectable()
export class UserService implements CanActivate{
  userLoggedIn: boolean = false;
  user: any;
  uid: string;
  userName: string;
  userRole: string
  email: string;
  emailVerified: boolean
  userObject: any[];


  constructor( private router: Router) { 
    firebase.initializeApp({
        apiKey: "AIzaSyBoq7jXxUoYqjetkcs4tUJv96kTZmpH_y4",
        authDomain: "lookmaster-1b329.firebaseapp.com",
        databaseURL: "https://lookmaster-1b329.firebaseio.com",
        projectId: "lookmaster-1b329",
        storageBucket: "lookmaster-1b329.appspot.com",
        messagingSenderId: "80299132004"
    });
  };

  // Функция гвард для допуска на страницы - надо перенести или доработать
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    let url: string = state.url;
    return this.verifyLogin(url)
  }

  verifyLogin(url: string): boolean {
    if(this.userLoggedIn) {return true;}
    this.router.navigate(['/login']);
    return false
  }

  register(email: string, password: string, userName: string){
    var user = null;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () {
      user = firebase.auth().currentUser;
      user.sendEmailVerification();
    })
    .then(function () {
      user.updateProfile({
        displayName: userName
      });
    })
    .catch(function(error){
      alert(`${error.message} Please Try Again!`)
    })
    console.log('Validation link was sent to ' + email + '.');
  }

 

  createUserObject(){
    var user = firebase.auth().currentUser;
    var savedUserRole: string = localStorage.getItem('savedUserRole');
    firebase.database().ref('users/' + user.uid).set({
      id: this.user.uid,
      userRole: savedUserRole,
      userName: user.displayName
    }).catch(function(error){
        alert(`${error.message} Unable to create User Object`)
      })
      console.log(this.user.uid)
  };


  createMasterCard(){
    var user = firebase.auth().currentUser;
    let dbRef = firebase.database().ref('masterCards/');
    let newMaster = dbRef.push();
    newMaster.set({
      userId: user.uid,
      masterId: newMaster.key,
    });
  };



  login(loginEmail: string, loginPassword: string) {
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
      .catch(function(error){
        alert(`${error.message} Unable to login. Try Again! `)
      })
  }

  verifyUser(){
      this.user = firebase.auth().currentUser;
      if (this.user != null) {
        this.userLoggedIn = true;
        this.userName = this.user.displayName;
        this.email = this.user.email;
        this.emailVerified = this.user.emailVerified;
        this.uid = this.user.uid;
        // this.photoUrl = this.user.photoURL;
      } else if (this.user == null ){
        this.userLoggedIn = false;
        this.userName = null;
        this.email = null;
        this.emailVerified = null
        this.uid = null;
      }
    }

  checkLoggedState(){
    this.user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user != null) {
        alert("We checked - you logged")
        // return this.userLoggedIn = true;
      } else {
        alert("We checked - you unlogged!!!")
        // return this.userLoggedIn = false;
      };
    });
  };


  getUserData(){
    // Какого хера сюда не подгружается айдишник юзера из сервиса?
    var user = firebase.auth().currentUser;
     firebase.database().ref('/users/' + user.uid).once('value')
     .then((snapshot)=> {
      this.userRole = snapshot.val().userRole;
    });
  };

  logout(){
    firebase.auth().signOut().then(function(){
      }, function(error){
          alert(`${error.message} Unable to logout. Try Again! `);
      })
  };

};
