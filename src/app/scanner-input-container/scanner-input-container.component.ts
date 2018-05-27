import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner-input-container',
  templateUrl: './scanner-input-container.component.html'
})
export class ScannerInputContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onPrint() {
    console.log('onPrint');
    window.print();
  }
}
