import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'ngx-facebook';

// Service
import { BookService } from '../shared/services/book.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private bookService: BookService,
        private router: Router
    ) { }

    login(): void {
        this.bookService.login
            .then((res: LoginResponse) => this.router.navigateByUrl('home'))
            .catch(err => console.error(err));
    }

    ngOnInit() { }

}
