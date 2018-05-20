import { Component, OnInit } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';

import { MediaType } from '../shared/media-type.enum';
import { Media } from '../shared/media';
import { MediaService } from '../shared/media.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html'
})
export class ApproveComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  constructor(
    private mediaService: MediaService,
    private dataService: DataService
  ) {}

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

  onRemoteGet() {
    // this.dataService.getRemoteImages().subscribe(imageStrings => {
    //   imageStrings.forEach(str => {
    //     this.mediaService.prepend(<Media>{
    //       type: MediaType.Image,
    //       data: str,
    //       timeStamp: new Date()
    //     });
    //   });
    //   this.updateMedia();
    // });

    this.dataService.getRemoteImages().subscribe(resp => {
      resp.results.forEach(result => {
        this.mediaService.prepend(<Media>{
          type: MediaType.Image,
          data: result.img,
          timeStamp: new Date(result.createdAt)
        });
      });
      this.updateMedia();
    });
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
