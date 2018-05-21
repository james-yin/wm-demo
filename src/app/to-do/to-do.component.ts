import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html'
})
export class ToDoComponent implements OnInit {
  toDoList: any[];
  ticketList: any[];
  mapOptions: any;
  // map: google.maps.Map;
  latitude: string;
  longitude: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getToDoList();
    this.getTicketList();
    // this.mapOptions = {
    // center: { lat: 36.890257, lng: 30.707417 },
    // zoom: 12
    // };
  }

  getToDoList() {
    this.dataService.getToDoData().subscribe(resp => {
      this.toDoList = resp.results.splice(0, 3);
    });
  }

  // setMap(event) {
  //   this.map = event.map;
  //   this.mapOptions = {
  //     center: { lat: 36.890257, lng: 30.707417 },
  //     zoom: 12
  //   };
  // }

  getTicketList() {
    this.dataService.getTicketData().subscribe(resp => {
      this.ticketList = resp.results.splice(0, 3);
      this.ticketList.forEach(t => {
        t.img = t.img.replace('http:/', 'https:/');
      });
    });
  }
}
