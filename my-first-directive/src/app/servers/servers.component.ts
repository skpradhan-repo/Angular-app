import { Component } from '@angular/core';

@Component({
    selector:'app-servers',
    templateUrl: './servers.component.html',
    styleUrls:['./servers.component.scss']
})
export class ServersComponent{
    serverName='';
    serverStatus = false;

    updateServerName(){
        if('' != this.serverName.trim()){
            this.serverStatus = true;
        }

    }
}