import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-quote',
  templateUrl: './flat-quote.component.html'
})
export class FlatQuoteComponent implements OnInit {
  quotesData: any;

  constructor() {}

  ngOnInit() {}

  populateData(quotesData) {
    this.quotesData = quotesData;
  }
}
