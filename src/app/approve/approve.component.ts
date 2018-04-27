import { Component, OnInit } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html'
})
export class ApproveComponent implements OnInit {
  images: any[];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {}

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '800px',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSize: 'contain',
        previewZoom: true,
        previewRotate: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/deng-hs.jpg',
        medium: 'assets/images/deng-hs.jpg',
        big: 'assets/images/deng-hs.jpg'
      },
      {
        // tslint:disable-next-line:max-line-length
        small: 'assets/images/Xi_Jinping_March_2017a.png',
        medium: 'assets/images/Xi_Jinping_March_2017a.png',
        big: 'assets/images/Xi_Jinping_March_2017a.png'
      }
    ];

    // this.images = [];
    // this.images.push({
    //   source: 'assets/images/deng-hs.jpg',
    //   title: ''
    // });
    // this.images.push({
    //   source: 'assets/images/Xi_Jinping_March_2017a.png',
    //   title: ''
    // });
  }
}
