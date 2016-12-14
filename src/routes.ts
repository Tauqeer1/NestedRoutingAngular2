import { Routes } from '@angular/router';

import {HomeComponent} from './component/home/home.component';
import {AboutComponent} from './component/about/about.component';
import {AboutHomeComponent} from "./component/about-home/about.home.component";
import {AboutItemComponent} from "./component/about-item/about.item.component";


export const RoutesConfig: Routes = [
    {path: 'home', component: HomeComponent },
    {
        path: 'about',
        component: AboutComponent,
        children: [
            { path: 'home', component: AboutHomeComponent },
            { path: 'item/:id', component: AboutItemComponent }

        ]
    }
];

export const RouteComponents = [HomeComponent, AboutComponent, AboutHomeComponent, AboutItemComponent];