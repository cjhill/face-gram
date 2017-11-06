import { Injectable } from '@angular/core';
import { FacebookService, LoginResponse } from 'ngx-facebook';

@Injectable()
export class BookService {

    constructor(private fb: FacebookService) { }

    // Authentication
    get login(): Promise<LoginResponse> {
        return this.fb.login()
    }

    get logout(): Promise<any> {
        return this.fb.logout();
    }

    // Get Requests
    get friends(): Promise<any> {
        return this.fb.api('/me/picture');
    }

    get profile(): Promise<any> {
        return this.fb.api('/me');
    }

}
