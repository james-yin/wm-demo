import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-quote',
  templateUrl: './flat-quote.component.html'
})
export class FlatQuoteComponent implements OnInit {
  summaryId: string;

  constructor() {}

  ngOnInit() {}

  populateData(summaryId: string) {
    this.summaryId = summaryId;
  }
}
