import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductCrudsService } from '../../../shared/services/products-cruds.service';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { Subscription } from 'rxjs';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { DataService } from 'app/shared/services/data.service';
import {SalesPopupComponent} from '../crud-sales-table/sales-popup/sales-popup.component' 
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-crud-sales-table',
  templateUrl: './crud-sales-table.component.html',
  styleUrls: ['./crud-sales-table.component.scss']
})
export class CrudSalesTableComponent implements OnInit {
  public items: any[];
  data: any;
  public getItemSub: Subscription;

  currentProductid : string;

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
    this.dservice.currentProductid.subscribe(pdt=> this.currentProductid=pdt)


  }
ngOnDestroy(){
  if(this.getItemSub){
    this.getItemSub.unsubscribe()
  }
}
getlistofItem(){
  this.getItemSub = this.curdService.getSalesOrder().subscribe(data=>{
     this.items = data;

  });
}


openPopUp(data: any = {}, isNew?) {
  let title = isNew ? '処理中...' : '完了';
  let dialogRef: MatDialogRef<any> = this.dialog.open(SalesPopupComponent, {
    width: '720px',
    disableClose: true,
    data: { title: title, payload: data }
  })
  dialogRef.afterClosed()
    .subscribe(res => {
      if(!res) {
        // If user press cancel
        return;
      }
      this.loader.open();
      if (isNew) {
        this.curdService.AddSalesOrder(res)
        this.loader.close()
        this.snack.open('登録完了!', 'OK', { duration: 4000 })
      } else {
        this.curdService.updateSalesOrder(data._id, res)
        this.loader.close();
        this.snack.open('修正完了!', 'OK', { duration: 4000 })
   
       }
    })
}

navigatetoKey(data:any={}, isNew?){
  console.log(data._id)
  this.dservice.changeProduct(data._id)
  console.log(data._id)
  this.router.navigate([`受注入力/受注テーブル/${data._id}`])
  this.dservice.changeProduct(data._id)
}


}
