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
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Testserver';
  username: string = '';
  usernameIsEmpty: boolean = true;


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!' + this.serverName;
  }

  ResetUsername() {
    this.username = '';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
