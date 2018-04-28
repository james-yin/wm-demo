import { Injectable } from '@angular/core';

import { MediaType } from '../shared/media-type.enum';
import { Media } from '../shared/media';

@Injectable()
export class MediaService {
  allMedia: Media[] = [];

  constructor() {}

  create(media: Media) {
    this.allMedia.push(media);
  }

  getAll() {
    return this.allMedia;
  }

  deleteAll() {
    this.allMedia = [];
  }
}
