import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { BookService } from './shared/services/book.service';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FacebookModule.forRoot(),
        FormsModule,
        HttpModule,
        RouterModule.forRoot(
            routes,
            { enableTracing: true }
        )
    ],
    providers: [ BookService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
