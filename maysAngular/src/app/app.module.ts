import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './Interceptors/jwt.interceptor';
import { RegisterComponent } from './core/register/register.component';
import { PopComponent } from './core/pop/pop.component';
import { PopPostedComponent } from './core/pop-posted/pop-posted.component';
import { CommentsComponent } from './core/comments/comments.component';
import { LikeComponent } from './core/like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PopComponent,
    PopPostedComponent,
    CommentsComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
