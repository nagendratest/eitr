import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { LoginAppComponent }   from './login/login.component';

@NgModule({
    declarations: [LoginAppComponent],
    imports:      [BrowserModule],
    bootstrap:    [LoginAppComponent],
})
export class AppModule {}
