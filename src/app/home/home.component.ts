import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'ngx-facebook';

// Services
import { BookService } from '../shared/services/book.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    profileImage: string;

    constructor(
        private bookService: BookService,
        private router: Router
    ) {
        this.bookService.profile.then(profile => console.log(profile));
        this.bookService.friends.then(list => this.profileImage = list.data.url);
    }

    logout(): void {
        this.bookService.logout.then(() => this.router.navigateByUrl(''));
    }

    ngOnInit() { }

}
