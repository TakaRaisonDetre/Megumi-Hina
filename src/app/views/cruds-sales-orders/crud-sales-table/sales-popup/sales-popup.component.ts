import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductCrudsService } from '../../../../shared/services/products-cruds.service';
import {Category} from '../../../../shared/models/category.model';


@Component({
  selector: 'app-sales-popup',
  templateUrl: './sales-popup.component.html',
  styleUrls: ['./sales-popup.component.scss']
})
export class SalesPopupComponent implements OnInit {
   public itemForm: FormGroup;


  client : Category[]= [
    {value: '青木人形', viewValue: '青木人形'},
    {value: '美好', viewValue: '美好'},
    {value: '加賀', viewValue: '加賀'},
    {value: '河西工藝', viewValue: '河西工藝'},
    {value: '川秀', viewValue: '川秀'},
    {value: '久月', viewValue: '久月'},
    {value: '京屋人形', viewValue: '京屋人形'},
    {value: '京華人形', viewValue: '京華人形'},
    {value: '四国民芸', viewValue: '四国民芸'},
    {value: 'スズタキ', viewValue: 'スズタキ'},
    {value: '高木玩具店', viewValue: '高木玩具店'},
    {value: '高橋ケース製作所', viewValue: '高橋ケース製作所'},
    {value: '竹芳', viewValue: '竹芳'},
    {value: '長月', viewValue: '長月'},
    {value: '月志', viewValue: '月志'},
    {value: '西尾人形センター', viewValue: '西尾人形センター'},
    {value: '人形の大路', viewValue: '人形の大路'},
    {value: 'ハーベストムーン', viewValue: 'ハーベストムーン'},
    {value: '雛の廣榮', viewValue: '雛の廣榮'},
    {value: '兵商', viewValue: '兵商'},
    {value: '増井製作所', viewValue: '増井製作所'},
    {value: '増村人形', viewValue: '増村人形'},
    {value: '吉福', viewValue: '吉福'},
    {value: 'ヨシマル', viewValue: 'ヨシマル'},
    {value: '渡辺人形', viewValue: '渡辺人形'},
    {value: '宝玉', viewValue: '宝玉'},
    {value: '長井', viewValue: '長井'},
    {value: '好光', viewValue: '好光'},
    {value: '龍田産業', viewValue: '龍田産業'},
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SalesPopupComponent>,
    private fb: FormBuilder,
    private crudService: ProductCrudsService
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload)
  }
buildItemForm(item){
  this.itemForm = this.fb.group({
    client:[item.client || '', Validators.required],
    orderDate: [item.orderDate || '', Validators.required],
    deliveryDeadline: [item.deliveryDeadline || ''],
    isComplete: [item.isComplete || ''],
   
  });
}
salesOrderSubmit(){
  this.dialogRef.close(this.itemForm.value);
 // this.crudService.AddSalesOrder(this.itemForm.value)
}
}
