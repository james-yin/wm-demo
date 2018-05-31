import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-detail',
  templateUrl: './flat-detail.component.html'
})
export class FlatDetailComponent implements OnInit {
  detailData: any;

  constructor() {}

  ngOnInit() {}

  populateData(detailData) {
    this.detailData = detailData;
  }
}
