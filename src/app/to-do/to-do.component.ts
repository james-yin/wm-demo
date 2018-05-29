import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html'
})
export class ToDoComponent implements OnInit {
  baiduMapApiKey = 'LVde4U5Whh07YpyEQxUvzcZ9C49jBZy6';

  toDoList: any[];
  ticketList: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getToDoList();
    this.getTicketList();
  }

  getToDoList() {
    this.dataService.getToDoData().subscribe(resp => {
      this.toDoList = resp.results.splice(0, 3);
    });
  }

  getTicketList() {
    this.dataService.getTicketData().subscribe(resp => {
      this.ticketList = resp.results.splice(0, 3);
      // http -> https
      this.ticketList.forEach(t => {
        t.img = t.img.replace('http:/', 'https:/');
      });
    });
  }

  getMapImageUrl() {
    return (
      `https://api.map.baidu.com/staticimage/v2?` +
      `ak=${this.baiduMapApiKey}` +
      `&mcode=666666&dpiType=ph&zoom=18&scale=2` +
      `&center=${this.ticketList[0].longitude},${this.ticketList[0].latitude}` +
      `&markers=${this.ticketList[0].longitude},${
        this.ticketList[0].latitude
      }` +
      `&markerStyles=l,A,0xFF0000`
    );
  }
}
