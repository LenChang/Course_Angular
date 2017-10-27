import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-servers', // element
  // selector: '[app-servers]', // parameter
  // selector: '.app-servers',  // class
  templateUrl: './servers.component.html',
  //--- inline code ---//
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
