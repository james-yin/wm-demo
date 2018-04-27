import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html'
})
export class ApproveComponent implements OnInit {
  images: any[];

  constructor() {}

  ngOnInit() {
    this.images = [];
    this.images.push({
      source: 'assets/images/deng-hs.jpg',
      title: ''
    });
    this.images.push({
      source: 'assets/images/Xi_Jinping_March_2017a.png',
      title: ''
    });
  }
}
