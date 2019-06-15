import { Component } from '@angular/core';

@Component({
  templateUrl: './server.component.html',
  selector: 'app-server'
})

export class ServerComponent {
  serverID: number = 10001;
  serverStatus: string = 'offline';
  getServerID(){
    return this.serverID;
  }
}
