import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSnackBar, MatSidenav, MatButton } from '@angular/material';
import { SOService, CartItem } from '../sales-order.service';
import { Product } from '../../../shared/models/product.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { egretAnimations } from '../../../shared/animations/egret-animations';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import {ProductCrudsService} from '../../../shared/services/products-cruds.service'

// model 
import { HinaProduct } from 'app/shared/models/hina_product.model';
import { Category } from 'app/shared/models/category.model';

// multiple filter
import * as _ from 'lodash';

@Component({
  selector: 'app-so-lists',
  templateUrl: './so-lists.component.html',
  styleUrls: ['./so-lists.component.scss'],
  animations: [egretAnimations]
})
export class SoListsComponent implements OnInit {
  public isSideNavOpen: boolean;
  public viewMode: string = 'grid-view';
  public currentPage: any;
  @ViewChild(MatSidenav) private sideNav: MatSidenav;

  public products$: Observable<HinaProduct[]>;
  
  products:any

  public categories$: Observable<Category[]>;
  
  public activeCategory: string = 'All';
  
  public filterForm: FormGroup;
  
  public cart: CartItem[];
  
  public cartData: any;
  public getItemSub: Subscription;


//// unwrapped array from firebase 
Hina_products: any;
FilteredHinaproduct:any;

//// filtaerable property
categories:string;
isNew:boolean;
size:number;

filters ={};


  constructor(

    private SOService: SOService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private loader: AppLoaderService
  ) { }

  ngOnInit() {
    // acquire categories 
    this.categories$ = this.SOService.getCategories();

  //    this.buildFilterForm(this.SOService.initialPriceFilters);
   
  //    setTimeout(() => {
  //       this.loader.open();
  //     });
  //    this.products$ = this.SOService
  //  .getFilteredProduct(this.filterForm)
  //    .pipe(
  //      map(products => {
  //      this.loader.close();
  //       return products;
  //      })
  //    );
  //   this.getCart();
  //  this.cartData = this.SOService.cartData;

    this.SOService.getProducts().subscribe(products=>{
        this.Hina_products=products;
        this.applyFilters();
      });

  }

private applyFilters(){
  this.FilteredHinaproduct = _.filter(this.Hina_products, _.conforms(this.filters))
}

/// filter property by equality to rule
filterExact(property: string, rule: any){
  this.filters[property] = val => val == rule
  this.applyFilters();
}
/// filter properties with numbers greater than rule
filterGreaterThan(property: string, rule: number){
  this.filters[property] = val => rule
  this.applyFilters();
}

filterBoolean(property: string, rule: boolean){
    if(!rule) this.removeFilter(property)
   else {
     this.filters[property] = val => val
   this.applyFilters()
 }
}

/// removes filters
removeFilter(property:string){
  delete this.filters[property]
  this[property]=null;
  this.applyFilters()
}

  getListofItem(){
    this.getItemSub = this.SOService.getProducts().subscribe(data=>{
      this.products=data;
    })
    
  }

  getCart() {
    this.SOService
    .getCart()
    .subscribe(cart => {
      this.cart = cart;
    })
  }
  addToCart(product) {
     let cartItem: CartItem = {
      product: product,
      data: {
        quantity: 1
      }
    };
     this.SOService
     .addToCart(cartItem)
     .subscribe(cart => {
     this.cart = cart;
      this.snackBar.open('Product added to cart', 'OK', { duration: 4000 });
    })
  }
 
  // setActiveCategory(category) {
  //   this.activeCategory = category;
  //   this.filterForm.controls['category'].setValue(category)
  // }

  toggleSideNav() {
    this.sideNav.opened = !this.sideNav.opened;
  }  
}
