import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductCrudsService } from '../../../../shared/services/products-cruds.service';
import { DataService } from 'app/shared/services/data.service';


@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.scss']
})
export class ImagePopupComponent implements OnInit {
  
  isHovering: boolean;

  files: File[] = [];

  // current project
  currentProductid : string;  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ImagePopupComponent>,
    private fb: FormBuilder,
    private crudService: ProductCrudsService,
    private dservice: DataService
  ) { }

  ngOnInit() {
    
    this.dservice.currentProductid.subscribe(pdt => this.currentProductid= pdt)
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
}
 

}
