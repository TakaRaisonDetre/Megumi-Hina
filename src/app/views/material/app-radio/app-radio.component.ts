import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './app-radio.component.html',
  styleUrls: ['./app-radio.component.css']
})
export class AppRadioComponent implements OnInit {
  selectedSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
  constructor() { }

  ngOnInit() {
  }

}
