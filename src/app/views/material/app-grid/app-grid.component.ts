import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.css']
})
export class AppGridComponent implements OnInit {

  gridFixedHeight = [
    { text: 'One', cols: 3, rows: 1, color: '#607d8b' },
    { text: 'Two', cols: 1, rows: 2, color: '#607d8b' },
    { text: 'Three', cols: 1, rows: 1, color: '#607d8b' },
    { text: 'Four', cols: 2, rows: 1, color: '#607d8b' },
  ];

  gridRatioHeight = ['Grid One', 'Grid Two', 'Grid Three', 'Grid Four']

  constructor() { }

  ngOnInit() {
  }

}
