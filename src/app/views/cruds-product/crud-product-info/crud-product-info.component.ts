import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import {AngularFirestoreDocument} from '@angular/fire/firestore';

// Serviced in use
import {DataService} from '../../../shared/services/data.service';
import {ProductCrudsService} from '../../../shared/services/products-cruds.service';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';

import { InputPopupComponent } from '../crud-products-table/input-popup/input-popup.component';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { DetailPopupComponent } from './detail-popup/detail-popup.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crud-product-info',
  templateUrl: './crud-product-info.component.html',
  styleUrls: ['./crud-product-info.component.scss']
})
export class CrudProductInfoComponent implements OnInit {

  // shared current Product Id 
  currentProductid:string;
  product:string;
  pid:any;

  productRef: AngularFirestoreDocument<any>;
  product$: Observable<any>;
  prod:any;
  pdt:any;
  public getItemSub: Subscription;
  public items: any[];
  public labor: any;
  

  constructor(
    private aroute: ActivatedRoute,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private crudService: ProductCrudsService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private dservice: DataService
  ) { 
    
  }

  ngOnInit() {
    this.dservice.currentProductid.subscribe(pdt => this.currentProductid= pdt)
   console.log(this.currentProductid)
   // get the simple product items 
   this.aroute.params
    .switchMap(param=>this.crudService.getSingleProduct(param.id))
    .subscribe(pdt=>{this.pdt=pdt
    
    // get the image of product
    let storageRef =firebase.storage()
    if(pdt.downloadURL){
      storageRef.refFromURL(`${pdt.downloadURL}`).getDownloadURL()
      .then(
        (url)=>{ pdt.downloadURL=url;}
      )
    }
    })
  
    this.getListofKijiCost();
   
     
}
ngOnDestroy() {
  if (this.getItemSub) {
    this.getItemSub.unsubscribe()
  }
}
// get the multiple costs item for this specific project  
getListofKijiCost(){
    this.getItemSub = this.crudService.getKijiCostForthisProduct(this.currentProductid)
    .subscribe(kiji=>{
      this.items=kiji
     
    })
} 



openGOGSPopUp(data:any={}, isNew?){
  let title = isNew? '原価入力':'原価修正';
  let dialogRef: MatDialogRef<any> = this.dialog.open(DetailPopupComponent,{
      width: '720px',
      disableClose: true,
      data: { title: title, payload: data }
  })
  dialogRef.afterClosed()
    .subscribe(res=>{
      if(!res){
          // If user press cancel
          return;
      }
      if(isNew) {
        this.loader.open();
        this.crudService.AddCOGS(res)
        this.crudService.AddSubCOGS(res, this.currentProductid, res.name)
        this.loader.close()
        this.snack.open('登録完了!', 'OK', { duration: 4000 })
      } else {
        this.crudService.updateCOGS(data.id, res)
        this.crudService.updateSubCOGS(res, this.currentProductid, res.name)
        this.loader.close();
        this.snack.open('修正完了!', 'OK', { duration: 4000 })
      }
      

    })
}

}
