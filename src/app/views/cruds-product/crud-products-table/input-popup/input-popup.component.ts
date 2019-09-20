import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductCrudsService } from '../../../../shared/services/products-cruds.service';
import {Category} from '../../../../shared/models/category.model';
import { CalendarEvent } from 'angular-calendar';
import { EgretCalendarEvent } from '../../../../shared/models/event.model';

interface DialogData {
  event?: CalendarEvent,
  action?: string,
  date?: Date
}

@Component({
  selector: 'app-input-popup',
  templateUrl: './input-popup.component.html',
  styleUrls: ['./input-popup.component.scss']
})
export class InputPopupComponent implements OnInit {
  public itemForm: FormGroup;
  
  event:CalendarEvent;
  dialogTitle:string;
  eventForm:FormGroup;
  action:string;

  

  categories : Category[]= [
    {value: '御所篭', viewValue: '御所篭'},
    {value: '三ツ揃い対鏡', viewValue: '三ツ揃い対鏡'},
    {value: '三宝', viewValue: '三宝'},
    {value: '貝桶', viewValue: '貝桶'},
    {value: 'その他', viewValue: 'その他'}
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<InputPopupComponent>,
    private fb: FormBuilder,
    private crudService: ProductCrudsService
  ) { 
     this.event=data.event;
     this.action=data.action;

     if(this.action==='edit'){
       this.dialogTitle=this.event.title;
       
     } else {
       this.dialogTitle = 'Add Event';
       this.event=new EgretCalendarEvent({
         start:data.date,
         end:data.date
       });
     }
    // console.log(data);
   // this.eventForm = this.buildEventForm(this.event);
  }

  ngOnInit() {
    this.buildItemForm(this.data.payload)
  }
  buildItemForm(item) {
    this.itemForm = this.fb.group({
      categories:[item.categories || '', Validators.required],
      name: [item.name || '', Validators.required],
      size: [item.size || ''],
      photo: [item.photo || ''],
      description: [item.description || ''],
      price: [item.price || ''],
      isNew: [item.isNew || false],
      makie_artist:[item.makie_artist || ''],
      makie_cost:[item.makie_cost|| ''],
      coloring_vender:[item.coloring_vender|| ''],
      coloring_cost:[item.coloring_cost|| ''],
    })
  }
  
  ProductSubmit() {
   // this.crudService.AddProduct(this.itemForm.value)
    this.dialogRef.close(this.itemForm.value)
  }

}
