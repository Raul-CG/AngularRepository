import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowNewUser = false;
  serverCreated = false;
  serverCreationStatus = 'No server was created yet';
  userCreationStatus = 'No user was registered yet';
  serverName = 'Test Server';
  userName = "";
  servers = ['TestServer 1','TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! The server\'s name is: ' + this.serverName;
    this.serverCreated = true;
  }

  onCreateUser() {
    this.userCreationStatus = 'User was registered! The user\'s name is ' + this.userName;
    this.userName = '';
    this.allowNewUser = false;
  }

  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value
  }

  checkUserName(input: string) {
    if(input != '') {
      this.allowNewUser = true;
    }
    return this.allowNewUser;
  }

}
