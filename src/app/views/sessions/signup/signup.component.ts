import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';


// added 
import {AuthService} from '../../../core/auth.service';

import {Router} from '@angular/router';
import {map, take, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signupForm: FormGroup
  constructor(
    
    private fb: FormBuilder,
    public auth : AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: password,
      confirmPassword: confirmPassword,
      agreed: new FormControl('', (control: FormControl) => {
        const agreed = control.value;
        if(!agreed) {
          return { agreed: true }
        }
        return null;
      })
    })
  }

  signup() {
    const signupData = this.signupForm.value;
    console.log(signupData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';

      //  add /////////////
      this.auth.emailSignUp(this.signupForm.value['email'], this.signupForm.value['password']);
      this.router.navigate(['/sessions/signin']);
      /////////////////////
 
  }

}
