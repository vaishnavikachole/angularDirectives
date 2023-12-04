import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  // styleUrls: ['./style-binding.component.css']
  styles:[
    `.online{
        color : white;
    }`
  ]})
export class StyleBindingComponent {
  serverId:number = 10;
  serverStatus: string = "offline";

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
