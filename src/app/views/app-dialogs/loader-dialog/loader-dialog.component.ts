import { Component, OnInit } from '@angular/core';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';

@Component({
  selector: 'app-loader-dialog',
  templateUrl: './loader-dialog.component.html',
  styleUrls: ['./loader-dialog.component.css']
})
export class LoaderDialogComponent implements OnInit {
  loadingTime = 3000;
  title = 'Please wait';
  constructor(private loader: AppLoaderService) { }

  ngOnInit() {
  }
  openLoader() {
    this.loader.open(this.title);
    setTimeout(() => {
      this.loader.close();
    }, this.loadingTime)
  }
}
