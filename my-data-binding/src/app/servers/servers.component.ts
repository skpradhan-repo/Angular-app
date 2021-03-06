import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="No Server was created";
  serverName='Test Server';
  constructor() { 
    setTimeout(() =>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer()
{
    this.serverCreationStatus='Server is Created and name is '+this.serverName;
}
onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
  // console.log(this.serverName);
  console.log(event);
}
}
