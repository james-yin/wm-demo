import { Component, OnInit } from '@angular/core';

import { MediaType } from '../shared/media-type.enum';
import { Media } from '../shared/media';
import { MediaService } from '../shared/media.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit {
  isUploadComplete = false;

  constructor(private mediaService: MediaService) {}

  ngOnInit() {}

  myUploader(event) {
    const allFiles = event.files;
    for (let i = 0; i < allFiles.length; i++) {
      const reader = new FileReader();
      reader.onload = e => {
        this.mediaService.create(<Media>{
          type: MediaType.Image,
          data: (e.target as FileReader).result,
          timeStamp: new Date()
        });
      };
      reader.readAsDataURL(allFiles[i]);
    }
    this.isUploadComplete = true;
  }

  onClearData() {
    this.mediaService.deleteAll();
    this.isUploadComplete = false;
  }
}
