import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  constructor() {}

  isBoolean = val => 'boolean' === typeof val;

  getCustomRender(data) {
    if (typeof data === 'boolean') {
      return data
        ? '<i class="fa fa-check"></i>'
        : '<i class="fa fa-times"></i>';
    }
    return data;
  }
}
