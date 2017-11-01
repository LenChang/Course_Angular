import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // element
  // selector: '[app-servers]', // parameter
  // selector: '.app-servers',  // class
  //--- inline code ---//
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: any) {
    console.log(event);
  }

}
