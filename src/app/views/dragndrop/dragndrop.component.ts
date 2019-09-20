import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {
  folders = [
    {
      name: 'Backups',
      updated: new Date('2/2/17'),
      color: 'primary'
    },
    {
      name: 'Payments',
      updated: new Date('2/2/17'),
      color: 'warn'
    },
    {
      name: 'Orders',
      updated: new Date('2/20/17'),
      color: 'accent'
    },
    {
      name: 'Photos',
      updated: new Date('1/2/17'),
      color: 'warn'
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/17'),
      color: 'primary'
    },
    {
      name: 'Work',
      updated: new Date('1/24/17'),
      color: 'accent'
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      // console.log(`drag: ${value[0]}`);
      // console.log(value);
      // console.log(this.folders)
    });
  }

  ngOnInit() {
  }

}
