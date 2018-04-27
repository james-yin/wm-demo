import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit {
  imageData: any[] = [];

  constructor() {}

  ngOnInit() {}

  myUploader(event) {
    const allFiles = event.files;
    for (let i = 0; i < allFiles.length; i++) {
      const reader = new FileReader();
      reader.onload = e => {
        console.log((e.target as FileReader).result);
        this.imageData.push((e.target as FileReader).result);
      };
      reader.readAsDataURL(allFiles[i]);
    }
  }

  // myUploader(event) {
  //   // console.log('event.files', event.files);
  //   // this.files = event.files;
  //   // const file = event.files[0];
  //   const reader = new FileReader();
  //   reader.onload = this._handleReaderLoaded.bind(this);
  //   // reader.readAsDataURL(file);
  //   for (const f of event.files) {
  //     console.log('f', f);
  //     reader.readAsDataURL(f);
  //   }
  // }

  // _handleReaderLoaded(e) {
  //   const reader = e.target;
  //   this.imageSrc = reader.result;
  //   this.imageData.push(reader.result);
  // }
}
