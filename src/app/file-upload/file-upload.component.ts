import { Component, OnInit, ViewChild } from '@angular/core';

import { FileUpload } from 'primeng/fileupload';

import { MediaType } from '../shared/media-type.enum';
import { Media } from '../shared/media';
import { MediaService } from '../shared/media.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit {
  @ViewChild('uploader') uploader: FileUpload;
  isUploadComplete = false;

  constructor(private mediaService: MediaService) {}

  ngOnInit() {}

  myUploader(event) {
    const allFiles = event.files;
    for (let i = 0; i < allFiles.length; i++) {
      const reader = new FileReader();
      reader.onload = e => {
        this.mediaService.append(<Media>{
          type: MediaType.Image,
          data: (e.target as FileReader).result,
          timeStamp: new Date()
        });
      };
      reader.readAsDataURL(allFiles[i]);
    }
    this.isUploadComplete = true;
    this.uploader.clear();
  }

  onClearData() {
    this.uploader.clear();
    this.mediaService.deleteAll();
    this.isUploadComplete = false;
  }
}
