import {Component, OnInit} from '@angular/core'
@Component ({
//selector: 'app-servers',
//template: 
//<app-server></app-server>
//<app-server></app-server>,
templateUrl: './servers.component.html, '
styles: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    servername = 'Testserver';
    serverCreated = false;
    servers = ['Testserver,Testserver 2'];

    constructor() { }

    ngOnInit () {

    }
 onCreateServer() {
     this.serverCreated = true;
     this.servers.push(this.servername);
     this.serverCreationStatus = 'Server was created! Name is' + this.servername;
 }  
 onUpdateServerName(event: Event) {
    this.servername = (<HTMLInputElement>event.target).value;
 }
}