import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    constructor(private fb: FacebookService) {
        let fbParams: InitParams = {
            appId: '2058170937802677',
            version: 'v2.8'
        };

        this.fb.init(fbParams);
    }
}
