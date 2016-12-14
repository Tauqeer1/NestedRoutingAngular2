"use strict";
var home_component_1 = require('./component/home/home.component');
var about_component_1 = require('./component/about/about.component');
var about_home_component_1 = require("./component/about-home/about.home.component");
var about_item_component_1 = require("./component/about-item/about.item.component");
exports.RoutesConfig = [
    { path: 'home', component: home_component_1.HomeComponent },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        children: [
            { path: 'home', component: about_home_component_1.AboutHomeComponent },
            { path: 'item/:id', component: about_item_component_1.AboutItemComponent }
        ]
    }
];
exports.RouteComponents = [home_component_1.HomeComponent, about_component_1.AboutComponent, about_home_component_1.AboutHomeComponent, about_item_component_1.AboutItemComponent];
