import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {RoutesConfig, RouteComponents} from './routes';

import { AppRoot } from './component/app';
import { HomeComponent } from './component/home';
import { AboutComponent } from './component/about';
import { AboutHomeComponent } from './component/about-home';
import { AboutItemComponent } from './component/about-item';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(RoutesConfig)],
    declarations: [AppRoot, ...RouteComponents, HomeComponent, AboutComponent, AboutHomeComponent, AboutItemComponent],
    providers: [
    ],
    bootstrap: [AppRoot]
})
export class AppModule { }