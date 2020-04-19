import { Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles:[`
        h3{
            background-color:red
        }
    `]
})
export class ServerComponent{

}