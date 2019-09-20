import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-ngx-table-popup',
  templateUrl: './ngx-table-popup.component.html'
})
export class NgxTablePopupComponent implements OnInit {
  public itemForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NgxTablePopupComponent>,
    private fb: FormBuilder,
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload)
   // this.itemForm.valueChanges.subscribe(console.log)
  }
  buildItemForm(item) {
    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      size: [item.size || ''],
      photo: [item.photo || ''],
      description: [item.description || ''],
      isNew: [item.isNew || false]
    })
  }

  ProductSubmit() {
    
    this.crudService.AddProduct(this.itemForm.value)
   
   
    this.dialogRef.close(this.itemForm.value)
  }
}
