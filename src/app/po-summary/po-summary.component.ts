import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import * as _ from "lodash";

@Component({
  selector: 'app-po-summary',
  templateUrl: './po-summary.component.html'
})
export class PoSummaryComponent implements OnInit {
  poSummary: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPoSummaryData().subscribe(data => {
      this.poSummary = data;
      console.log(this.poSummary);
    });
  }

}
