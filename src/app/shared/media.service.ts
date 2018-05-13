import { Injectable } from '@angular/core';

import { MediaType } from '../shared/media-type.enum';
import { Media } from '../shared/media';

@Injectable()
export class MediaService {
  allMedia: Media[] = [];

  constructor() {}

  append(media: Media) {
    this.allMedia.push(media);
  }

  prepend(media: Media) {
    this.allMedia.unshift(media);
  }

  getAll() {
    return this.allMedia;
  }

  deleteAll() {
    this.allMedia = [];
  }
}
