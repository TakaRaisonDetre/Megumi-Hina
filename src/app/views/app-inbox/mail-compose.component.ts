import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mail-compose',
  templateUrl: './mail-compose.template.html'
})
export class MailComposeComponent implements OnInit {
  newMailData = {};
  mailForm: FormGroup;

  constructor(private composeDialog: MatDialog) { }

  ngOnInit() {
    this.mailForm = new FormGroup({
      to: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      subject: new FormControl('', [
        Validators.required
      ]),
      message: new FormControl('', [
        Validators.required
      ])
    })
  }
  sendEmail() {
    console.log(this.mailForm.value);
  }
  closeDialog() {

  }
}
