'use strict';

import {provideRouter, RouterConfig} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import TopComponent from 'renderer/top.component';

export const routes: RouterConfig = [
    {path: 'top', component: TopComponent},
    {path: '**', redirectTo: 'top'},
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    {provide: LocationStrategy, useClass: HashLocationStrategy},
];

