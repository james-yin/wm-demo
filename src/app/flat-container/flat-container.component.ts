import { Component, OnInit, ViewChild } from '@angular/core';
import { FlatDetailComponent } from '../flat-detail/flat-detail.component';
import { FlatQuoteComponent } from '../flat-quote/flat-quote.component';

@Component({
  selector: 'app-flat-container',
  templateUrl: './flat-container.component.html'
})
export class FlatContainerComponent implements OnInit {
  @ViewChild(FlatDetailComponent) flatDetail: FlatDetailComponent;
  @ViewChild(FlatQuoteComponent) flatQuote: FlatQuoteComponent;

  constructor() {}

  ngOnInit() {}

  onSummaryRowSelect(summaryId: string) {
    this.flatDetail.populateData(summaryId);
    this.flatQuote.populateData(summaryId);
  }
}
