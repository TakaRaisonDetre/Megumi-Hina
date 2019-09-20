import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductCrudsService } from '../../../shared/services/products-cruds.service';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { InputPopupComponent } from '../crud-products-table/input-popup/input-popup.component';

import { Subscription } from 'rxjs';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { DataService } from 'app/shared/services/data.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-product-popup-product',
  templateUrl: './cruds-product.component.html',
  styleUrls: ['./cruds-product.component.scss'],
  animations: egretAnimations
})
export class CrudsProductComponent implements OnInit, OnDestroy {
  public items: any[];
  data :any;
  public getItemSub: Subscription;

  // current project
  currentProductid : string;  
  
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private crudService: ProductCrudsService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private dservice: DataService,
    private router:Router
  ) { }

  ngOnInit() {
   this.getlistofItem()
   this.dservice.currentProductid.subscribe(pdt => this.currentProductid= pdt)

  }
  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe()
    }
  }
  getlistofItem(){
      this.getItemSub  = this.crudService.getProducts().
      subscribe(data=>{
        this.items = data;
        // images 
        for (let entry of data){
          let storageRef=firebase.storage()
          if(entry.downloadURL){
            {
              storageRef.refFromURL(`${entry.downloadURL}`).getDownloadURL()
              .then(
                (url)=>{
                  if(url){
                    entry.downloadURL=url;
                  } else {
                    entry.downloadURL='../../../assets/images/sq-16.jpg';
                  }
                  
                }
              )
            }
          }
        }
      });
  }


  openPopUp(data: any = {}, isNew?) {
    let title = isNew ? '商材登録' : '商材修正';
    let dialogRef: MatDialogRef<any> = this.dialog.open(InputPopupComponent, {
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
          this.crudService.AddProduct(res)
          this.loader.close()
          this.snack.open('登録完了!', 'OK', { duration: 4000 })
        } else {
          this.crudService.updateItem(data._id, res)
          this.loader.close();
          this.snack.open('修正完了!', 'OK', { duration: 4000 })
     
         }
      })
  }

  openPhoneUp(data: any={}, isNew?){
    let title = '写真アップロード'
    let dialogRef: MatDialogRef<any> = this.dialog.open(ImagePopupComponent, {
      width: '720px',
      disableClose: true,
      data: { title: title, payload: data }
    })
    dialogRef.afterClosed()
   
        this.dservice.changeProduct(data._id)
        console.log(data._id)


  }

  navigatetoKey(data: any={}, isNew?){
    console.log(data._id) 
    this.dservice.changeProduct(data._id)
    console.log(data._id) 
    this.router.navigate([`商品入力/商品テーブル/${data._id}`])
    this.dservice.changeProduct(data._id)

  }


  // deleteItem(row) {
  //   this.confirmService.confirm({message: `Delete ${row.name}?`})
  //     .subscribe(res => {
  //       if (res) {
  //         this.loader.open();
  //         this.crudService.removeItem(row)
  //           .subscribe(data => {
  //             this.items = data;
  //             this.loader.close();
  //             this.snack.open('Member deleted!', 'OK', { duration: 4000 })
  //           })
  //       }
  //     })
  // }
    

  

}
