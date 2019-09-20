import { Component, OnInit } from '@angular/core';
import { TablesService } from '../tables.service';

@Component({
  selector: 'app-fullscreen-table',
  templateUrl: './fullscreen-table.component.html',
  styleUrls: ['./fullscreen-table.component.css'],
  providers: [TablesService]
})
export class FullscreenTableComponent implements OnInit {
  rows = [];
  columns = [];
  constructor(private service: TablesService) { }

  ngOnInit() {
    this.columns = this.service.getDataConf();
    this.rows = this.service.getAll();
  }

}
