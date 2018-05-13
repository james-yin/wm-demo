import { Component, OnInit } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';

import { MediaType } from '../shared/media-type.enum';
import { Media } from '../shared/media';
import { MediaService } from '../shared/media.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html'
})
export class ApproveComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private mediaService: MediaService) {}

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

    this.updateMedia();
  }

  updateMedia() {
    this.galleryImages = [];
    const mediaList = this.mediaService.getAll();
    mediaList.forEach(m => {
      if (m.type === MediaType.Image) {
        this.galleryImages.push(<NgxGalleryImage>{
          small: m.data,
          medium: m.data,
          big: m.data
        });
      }
    });
  }
}
