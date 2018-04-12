import { Component, OnInit } from '@angular/core';

import * as _ from "lodash";

@Component({
  selector: 'app-po-summary',
  templateUrl: './po-summary.component.html'
})
export class PoSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('lodash version:', _.VERSION);
  }

}
