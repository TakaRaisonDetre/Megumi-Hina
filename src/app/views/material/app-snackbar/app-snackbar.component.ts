import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './app-snackbar.component.html',
  styleUrls: ['./app-snackbar.component.css']
})
export class AppSnackbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar() {
    console.log('test')
    this.snackBar.open('This is a message', 'close', { duration: 2000 });
  }

  ngOnInit() {
  }

}
