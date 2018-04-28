import { MediaType } from './media-type.enum';

export interface Media {
  type: MediaType;
  data: any;
  timeStamp: Date;
}
