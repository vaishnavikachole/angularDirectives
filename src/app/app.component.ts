import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDirectives';
  serverName = "Test server"
  serverCreatedStatus = "no server has created"
  serverCreated :boolean = false
  allowNewServer = true
  noServer = true



  onCreateServer(){
    this.serverCreated = true;
    this.serverCreatedStatus = "server was created and server name is " + this.serverName
  }
}
