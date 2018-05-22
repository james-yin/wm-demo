import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

declare var google: any;

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html'
})
export class ToDoComponent implements OnInit {
  toDoList: any[];
  ticketList: any[];
  mapOptions: any;
  map: google.maps.Map;
  latitude: string;
  longitude: string;
  overlays: any;

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
      this.setMapOptions();
    });
  }

  setMapOptions() {
    const ticket = this.ticketList[0];
    // map options
    this.mapOptions = {
      center: {
        lat: ticket.latitude,
        lng: ticket.longitude
      },
      zoom: 20
    };
    // map overlays
    this.overlays = [
      new google.maps.Marker({
        position: {
          lat: ticket.latitude,
          lng: ticket.longitude
        },
        title: ticket.name || '齐天大圣到此一游'}),
    ];
  }
}
