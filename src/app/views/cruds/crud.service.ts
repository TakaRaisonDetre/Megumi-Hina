import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDB } from '../../shared/inmemory-db/users';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {HinaProduct} from '../../shared/models/hina_product.model';

@Injectable()
export class CrudService {
   productsCollection: AngularFirestoreCollection<HinaProduct>;
   products: Observable<HinaProduct[]>


  items: any[];


  constructor(
    private http: HttpClient,
    public afs : AngularFirestore

  ) {

    this.productsCollection = this.afs.collection('Hina_products')


    let userDB = new UserDB();
    this.items = userDB.users;
  }

  //******* Implement your APIs ********
  getItems(): Observable<any> {
    return  of(this.items.slice())
  }


  
  addItem(item): Observable<any> {
    item._id = Math.round(Math.random() * 10000000000).toString();
    this.items.unshift(item);
    return of(this.items.slice()).pipe(delay(1000));
  }
  updateItem(id, item) {
    this.items = this.items.map(i => {
      if(i._id === id) {
        return Object.assign({}, i, item);
      }
      return i;
    })
    return of(this.items.slice()).pipe(delay(1000));
  }
  removeItem(row) {
    let i = this.items.indexOf(row);
    this.items.splice(i, 1);
    return of(this.items.slice()).pipe(delay(1000));
  }

// Add new products
AddProduct(item: HinaProduct){

this.productsCollection.add(item);

}

}
