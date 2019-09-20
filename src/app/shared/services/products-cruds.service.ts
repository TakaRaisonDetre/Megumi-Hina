import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDB } from '../../shared/inmemory-db/users';
import { Observable, of, pipe } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

// Models
import {HinaProduct} from '../../shared/models/hina_product.model';
import {COGS} from '../../shared/models/cogs.model';

import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';
import {SalesOrder} from '../../shared/models/salesorder.model';

@Injectable()
export class ProductCrudsService {

  productsCollection: AngularFirestoreCollection<HinaProduct>;
  products: Observable<HinaProduct[]>;
  
  cogsCollection: AngularFirestoreCollection<COGS>;
  cogs: Observable<COGS[]>;

   salesOrderCollection : AngularFirestoreCollection<SalesOrder>;
   salesorder : Observable<SalesOrder[]>


  items: any[];

  constructor(public afs : AngularFirestore) {
     // Product Collection 
    this.productsCollection = this.afs.collection('Hina_products');
    // COGS Collection 
    this.cogsCollection = this.afs.collection('Cost_of_Good_Sold');
    // sales order collection
    this.salesOrderCollection = this.afs.collection('sales_order');
  }
// get the list of products
  getProducts()   {
    this.products = this.afs.collection('Hina_products').snapshotChanges().pipe(map(
      changes=>{
        return changes.map(a=>{
          const data = a.payload.doc.data() as HinaProduct;
          data._id = a.payload.doc.id;
          return data;
        });
      }))
      return this.products; 
  }
// get the single product
getSingleProduct(productId){
  return this.afs.doc(`Hina_products/${productId}`).snapshotChanges().pipe(map(snap=>{
    const data = snap.payload.data() as HinaProduct;
    const id = snap.payload.id;
    return {id,...data};
  }));
}
// get list of kiji cost for that product 
getKijiCostForthisProduct(id){
  this.cogs=this.afs.collection('Cost_of_Good_Sold', ref=>{
    return ref 
    .where('product_id','==', id)
  }).snapshotChanges().pipe(map(
    changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as COGS;
        data.id = a.payload.doc.id;
        return data;
      });
    })) 
    return this.cogs
}

// Add new products
AddProduct(item){
   this.productsCollection.add(item);
}
// update product information
updateItem(id, item: HinaProduct) { 
  this.afs.doc(`Hina_products/${id}`).set(item, {merge:true});
  
}    
// Add new COGS of product
AddCOGS(item){
  this.cogsCollection.add(item);
}
// Add new COGS of product as a subcollection of product
AddSubCOGS(cogs: COGS, id, name){
  const addPath =`Hina_products/${id}/Cost_of_Good_Sold/${id}_${name}`
  this.afs.doc(addPath).set(cogs)
}
// update cost of goods sold
updateCOGS(id, item:COGS){
  this.afs.doc(`Cost_of_Good_Sold/${id}`).set(item, {merge:true});
}
// updateCOGS of product as a subcollection of product
updateSubCOGS(cogs:COGS, id, name){
  const addPath =`Hina_products/${id}/Cost_of_Good_Sold/${id}_${name}`
  this.afs.doc(addPath).set(cogs, {merge:true});
}



/////////////////////////////////////
// Sales order manipulation 

// get the list of products
getSalesOrder()   {
  this.salesorder= this.afs.collection('sales_order').snapshotChanges().pipe(map(
    changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as SalesOrder;
        data._id = a.payload.doc.id;
        return data;
      });
    }))
    return this.salesorder; 
}
// Add new products
AddSalesOrder(item){
  this.salesOrderCollection.add(item);
}
// update product information
updateSalesOrder(id, item: SalesOrder) { 
  this.afs.doc(`sales_order/${id}`).set(item, {merge:true});
  
}    
}
    