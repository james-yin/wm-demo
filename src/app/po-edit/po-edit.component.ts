import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-po-edit',
  templateUrl: './po-edit.component.html'
})
export class PoEditComponent implements OnInit {
  @Input() po: any;

  constructor() { }

  ngOnInit() {
  }

}
