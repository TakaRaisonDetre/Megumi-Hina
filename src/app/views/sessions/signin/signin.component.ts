import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';


// add 
import{AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';
import {map, take, debounceTime} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService]
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signinForm: FormGroup;

  constructor(

  private fb: FormBuilder,
  public auth : AuthService,
  public router: Router
  ) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    })
  }

  signin() {
    const signinData = this.signinForm.value
    console.log(signinData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate'; 
    // add
    this.auth.emailLogin(this.signinForm.value['email'], this.signinForm.value['password'])
    this.router.navigate(['/profile/overview']);
  }
   //add
  googleSignIn(){
    this.auth.googleLogin();
    console.log('success')
    
  }
   //add
  facebookSignIn():void {
    this.auth.facebookLogin();
    this.router.navigate(['/profile/overview']);
  }

  goAdmin():void{
    this.router.navigate(['/profile/overview']);
  }

}
