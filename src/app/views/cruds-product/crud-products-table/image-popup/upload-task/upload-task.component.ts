import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;
 
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  // current project
  currentProductid : string;  

 constructor(
   private storage: AngularFireStorage, 
   private db: AngularFirestore,
   private data: DataService) { }

 ngOnInit() {
  this.startUpload();
  this.data.currentProductid.subscribe(pdt => this.currentProductid= pdt)
}

startUpload() {

  // The storage path
  const path = `test/${Date.now()}_${this.file.name}`;

  // Reference to storage bucket
  const ref = this.storage.ref(path);

  // The main task
  this.task = this.storage.upload(path, this.file);

  // Progress monitoring
  this.percentage = this.task.percentageChanges();

  this.snapshot   = this.task.snapshotChanges().pipe(
    tap(console.log),
    // The file's download URL
    finalize( async() =>  {
      this.downloadURL = await ref.getDownloadURL().toPromise();
     
     // this.db.collection('Hina_products').add({downloadURL:this.downloadURL, path});
     this.db.doc(`Hina_products/${this.currentProductid}`).set( { downloadURL: this.downloadURL, path } ,{merge:true});
    }),
  );
}

isActive(snapshot) {
  return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
}

}