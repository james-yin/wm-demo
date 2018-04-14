import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-po-suggestion',
  templateUrl: './po-suggestion.component.html'
})
export class PoSuggestionComponent implements OnInit {
  @Input() poSummaryItem: any;

  constructor() { }

  ngOnInit() {
  }

}
