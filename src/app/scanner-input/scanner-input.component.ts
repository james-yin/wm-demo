import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scanner-input',
  templateUrl: './scanner-input.component.html'
})
export class ScannerInputComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  @Input() labelText: string;
  inputList: string[] = [];

  constructor() {}

  ngOnInit() {}

  onSubmit(form: any) {
    this.inputList.push(form['input']);
    this.input.nativeElement.select();
  }
}
