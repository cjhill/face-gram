import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';

import { BookService } from './shared/services/book.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FacebookModule.forRoot(),
        FormsModule,
        HttpModule
    ],
    providers: [ BookService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
