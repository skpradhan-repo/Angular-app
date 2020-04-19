import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.scss']
})
export class ServerComponent{
    serverName='';
    nameStatus = false;
    constructor(){
       if('' != this.serverName){
           this.nameStatus=true;
       }
    }

    onUserNameUpdate(event: Event){
        let tempVar = (<HTMLInputElement>event.target).value;
        if('' !=tempVar)
            this.serverName = tempVar.trim();

        if(''!=this.serverName){
            this.nameStatus = true;
        }else{
            this.nameStatus=false;
        }
    }
    
    onUserFormClick(){
        this.serverName='';
        this.nameStatus=false;
    }
}