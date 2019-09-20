import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductCrudsService } from '../../../../shared/services/products-cruds.service';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'app-detail-popup',
  templateUrl: './detail-popup.component.html',
  styleUrls: ['./detail-popup.component.scss']
})
export class DetailPopupComponent implements OnInit {
  public itemForm : FormGroup;
  currentProductid :any; 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef : MatDialogRef<DetailPopupComponent>,
    private fb: FormBuilder,
    private crudService:ProductCrudsService,
    private dservice: DataService
  ) { }

  ngOnInit() {
    // get product
    this.dservice.currentProductid.subscribe(pdt => this.currentProductid= pdt)
    this.buildItemForm(this.data.payload);
  }

  buildItemForm(item){
    this.itemForm  = this.fb.group({
      product_id: [this.currentProductid],
      name: [item.name || '', Validators.required],
      description: [item.description || ''],
      size: [item.size || ''],
      vendor: [item.vendor || ''],
      item_cost:[item.item_cost|| ''],
      original_color :[item.original_color ||''],
   
    })

  }
InfoSubmit(){
  
  // we do not need here - this.crudService.AddCOGS(this.itemForm.value)
  // becaseu it is done with product - crud info component
  this.dialogRef.close(this.itemForm.value)
}
}
