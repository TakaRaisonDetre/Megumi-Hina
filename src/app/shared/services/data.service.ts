import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService{

     private productSource = new BehaviorSubject<string>("id")
     currentProductid = this.productSource.asObservable();

     private SalesOrderSource = new BehaviorSubject<string>("id")
     currentSalesOrderid = this.SalesOrderSource.asObservable();

    constructor(){

    }

    changeProduct(currentProductid:string) {
        this.productSource.next(currentProductid)
    }

    changeSaleOrder(currentSalesOrderid) {
        this.SalesOrderSource.next(currentSalesOrderid)
    }
}