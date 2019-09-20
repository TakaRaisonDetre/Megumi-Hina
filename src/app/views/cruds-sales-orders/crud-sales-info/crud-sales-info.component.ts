import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductCrudsService } from '../../../shared/services/products-cruds.service';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';


import { Subscription } from 'rxjs';
import { egretAnimations } from "../../../shared/animations/egret-animations";

import { DataService } from 'app/shared/services/data.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-crud-sales-info',
  templateUrl: './crud-sales-info.component.html',
  styleUrls: ['./crud-sales-info.component.scss']
})
export class CrudSalesInfoComponent implements OnInit {
  public items: any[];
  data: any;
  public getItemSub: Subscription;

  currentSalesOrderid : string;

  constructor(
    private dialog:MatDialog,
    private snack:MatSnackBar,
    private curdService: ProductCrudsService,
    private confirrmService:AppConfirmService,
    private loader: AppLoaderService,
    private dservice: DataService,
    private router: Router

  ) { }

  ngOnInit() {
    this.getlistofItem()
   // this.dservice.currentProductid.subscribe(pdt=> this.currentProductid=pdt)
      this.dservice.currentSalesOrderid.subscribe(sod=>this.currentSalesOrderid=sod)

  }
ngOnDestroy(){
  if(this.getItemSub){
    this.getItemSub.unsubscribe()
  }
}
getlistofItem(){
  this.getItemSub = this.curdService.getProducts().subscribe(data=>{
     this.items = data;

  });
}

navigatetoKey(data:any={}, isNew?){
  console.log(data._id)
  this.dservice.changeProduct(data._id)
  console.log(data._id)
  this.router.navigate([`受注入力/受注テーブル/${data._id}`])
  this.dservice.changeProduct(data._id)
}


}
