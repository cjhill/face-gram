import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';

    constructor(private fb: FacebookService) {
        let fbParams: InitParams = {
            appId: '2058170937802677',
            version: 'v1'
        };

        this.fb.init(fbParams);
    }
}
