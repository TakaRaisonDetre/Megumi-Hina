
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductDB } from '../../shared/inmemory-db/products';
import { CountryDB } from '../../shared/inmemory-db/countries';
import { Product } from '../../shared/models/product.model';
import { FormGroup } from '@angular/forms';

import { of, combineLatest } from 'rxjs';
import { startWith, debounceTime, delay, map, switchMap,take } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Category } from 'app/shared/models/category.model';

// Models
import {HinaProduct} from '../../shared/models/hina_product.model';

// multiple filter
import * as _ from 'lodash';


export interface CartItem {
    product: Product;
    data: {
      quantity: number,
      options?: any
    };
  }
  
  @Injectable()
  export class SOService {

  productsCollection: AngularFirestoreCollection<HinaProduct>;
  products: Observable<HinaProduct[]>;  
  
  // public products: Product[] = [];
  public initialPriceFilters = {
    minPrice: 500,
    maxPrice: 5000,
  };

  public cart: CartItem[] = [];
  
  public cartData = {
    itemCount: 0
  }
  constructor(public afs : AngularFirestore) { 
      // Product Collection 
      this.productsCollection = this.afs.collection('Hina_products');
  }
  public getCart(): Observable<CartItem[]> {
    return of(this.cart)
  }

  public addToCart(cartItem: CartItem): Observable<CartItem[]> {
    let index = -1;
    this.cart.forEach((item, i) => {
      if(item.product._id === cartItem.product._id) {
        index = i;
      }
    })
    if(index !== -1) {
      this.cart[index].data.quantity += cartItem.data.quantity;
      this.updateCount();
      return of(this.cart)
    } else {
      this.cart.push(cartItem);
      this.updateCount();
      return of(this.cart)
    }
  }
  private updateCount() {
    this.cartData.itemCount = 0;
    this.cart.forEach(item => {
      this.cartData.itemCount += item.data.quantity;
    })
  }
  public removeFromCart(cartItem: CartItem): Observable<CartItem[]> {
    this.cart = this.cart.filter(item => {
      if(item.product._id == cartItem.product._id) {
        return false;
      }
      return true;
    });
    this.updateCount();
    return of(this.cart)
  }


  // public getProducts(): Observable<Product[]> {
  //   let productDB = new ProductDB();
  //   return of(productDB.products)
  //     .pipe(
  //       delay(500),
  //       map((data: Product[]) => {
  //         this.products = data;
  //         return data;
  //       })
  //     )
  // }
  public getProducts(): Observable<HinaProduct[]>{
    this.products = this.afs.collection('Hina_products').snapshotChanges()
    .pipe(
      delay(500),
      map(changes=>{
        return changes.map(a=>{
          const data = a.payload.doc.data() as HinaProduct;
          data._id = a.payload.doc.id;
          return data;
        });
      }))
      return this.products;
  }
  // public getProductDetails(productID): Observable<Product> {
  //   let productDB = new ProductDB();
  //   let product = productDB.products.filter(p => p._id === productID)[0];
  //   if(!product) {
  //     return observableThrowError(new Error('Product not found!'));
  //   }
  //   return of(product)
  // }
  
  public getCategories(): Observable<any> {
    // let categories = ['speaker', 'headphone', 'watch', 'phone'];
    let categories = [
      '御所篭',
      '三ツ揃対鏡',
      '三宝類',
      '貝桶類',
      'その他'
    ];

    return of(categories);
  }

    public getFilteredProduct(filterForm: FormGroup): Observable<HinaProduct[]> {
      return combineLatest(
        this.getProducts(),
        filterForm.valueChanges
       .pipe(
          startWith(this.initialPriceFilters),
          debounceTime(400)
       )
      )
      .pipe(
      switchMap(([products, filterData]) => {
          return this.filterProducts(products, filterData);
        })
      )
 
     }  
  /*
  * If your data set is too big this may raise performance issue.
  * You should implement server side filtering instead.
  */ 
   private filterProducts(products, filterData): Observable<HinaProduct[]> {
     let filteredProducts = products.filter(p => {
       let isMatch: Boolean;
       let match = {
         search: false,
         caterory: false,
         price: false,
       };
      // Search
       if (
         !filterData.search
         || p.name.toLowerCase().indexOf(filterData.search.toLowerCase()) > -1
         || p.description.indexOf(filterData.search) > -1
        || p.tags.indexOf(filterData.search) > -1
      ) {
         match.search = true;
      } else {
        match.search = false;
      }
      // Category filter
      if (
         filterData.category === p.category 
         || !filterData.category 
        || filterData.category === 'all'
      ) {
         match.caterory = true;
       } else {
        match.caterory = false;
       }
   
     for(let m in match) {
         if(!match[m]) return false;
       }

       return true;
     })
     return of(filteredProducts)
  }




}

