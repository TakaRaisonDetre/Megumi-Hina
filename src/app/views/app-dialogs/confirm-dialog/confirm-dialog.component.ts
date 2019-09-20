import { Component, OnInit } from '@angular/core';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  title = 'Confirm dialog';
  text = 'Just click a button!';
  selectedOption;
  constructor(public confirmService: AppConfirmService) { }

  ngOnInit() {
  }
  openDialog() {
    this.confirmService.confirm({title: this.title, message: this.text})
      .subscribe((result) => {
        this.selectedOption = result;
      });
  }
}
