import { Injectable } from '@angular/core';
import { FacebookService } from 'ngx-facebook';

@Injectable()
export class BookService {

    constructor(private fb: FacebookService) { }

}
