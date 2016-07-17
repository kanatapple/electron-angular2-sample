'use strict';

import {provideRouter, RouterConfig} from '@angular/router';

import TopComponent from 'renderer/top.component';

export const routes: RouterConfig = [
    {path: '', component: TopComponent},
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];

