import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {auth} from 'firebase/app';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {
  AngularFirestore, 
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import {of} from 'rxjs';
import {from} from 'rxjs'
import 'rxjs/add/operator/switchMap';

import {User} from '../shared/models/firebase.user.model';
import {switchMap, startWith, tap, filter } from 'rxjs/operators';
import {NotifyService } from '../shared/services/auth/notify.service';
import {first} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {Observable} from "rxjs/Observable";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 user$ : Observable<User | null> ;
 data;


  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
   private notify: NotifyService
  ) { 
      /// Get auth Data, then firestore user document // null
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
        // tap(user => localStorage.setItem('user', JSON.stringify(user))),
        // startWith(JSON.parse(localStorage.getItem('user')))
      );
  }

 ////// OAuth Methods /////

async googleLogin(){
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      return this.updateUserData(credential.user);
     
      
  }  
  // facebook 
  async facebookLogin(){
  const provider = new auth.FacebookAuthProvider()
  const credential = await this.afAuth.auth.signInWithPopup(provider);
  return this.updateUserData(credential.user);
  
}

private oAuthLogin(provider){
  return this.afAuth.auth.signInWithPopup(provider)
  .then((credential)=>{
      this.updateUserData(credential.user)
  })
  .catch(error=> this.handleError(error));
}

async signOut(){
  await this.afAuth.auth.signOut();
  return this.router.navigate(['/'])
}

private updateUserData(user:User) {
  // sets user data to firebase on login 
  const userRef : AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
  const data : User ={
      uid : user.uid,
      email : user.email,
      displayName : user.displayName,
      photoURL : user.photoURL || './assets/images/an.png',
    //  roles:{user:true}
    }
return userRef.set(data, { merge: true })
}



//// Email / Password Aurh ///////////////

emailSignUp(email:string, password:string){
  return this.afAuth.auth
  .createUserWithEmailAndPassword(email, password)
  .then(credential=>{
    this.notify.update('こんにちわ !', 'success');
    return this.updateUserData(credential.user);
  })
  .catch(error=>this.handleError(error));

}
// email login 
emailLogin(email: string, password: string){
  return this.afAuth.auth
  .signInWithEmailAndPassword(email, password)
  .then(credential=>{
    this.notify.update('こんにちわ', 'success');
    return this.updateUserData(credential.user);
  }).catch(error=> this.handleError(error));
}

 // Sends email allowing user to reset password
 resetPassword(email: string) {
  const fbAuth = firebase.auth();

  return fbAuth
    .sendPasswordResetEmail(email)
    .then(() => this.notify.update('Password update email sent', 'info'))
    .catch(error => this.handleError(error));
}


// If error, console log and notify user
private handleError(error: Error) {
  console.error(error);
  this.notify.update(error.message, 'error');
}


isLoggedIn(){
  return this.afAuth.authState.pipe(first());
}

// Used by the http interceptor to set the auth header
 getUserIdToken(): Observable<string> {
 //return from ( this.afAuth.auth.currentUser.getIdToken() );
 return null;
 }




}