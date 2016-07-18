'use strict';

import 'core-js';
import 'rxjs/Rx';
import 'zone.js/dist/zone';

import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
import {APP_ROUTER_PROVIDERS} from 'renderer/app.routes';
import AppComponent from 'renderer/app.component';

console.dir((<any>window).process);
console.log(location.href);
if (!((<any>window).app && (<any>window).app.env === 'development')) {
    // enableProdMode();
}

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS
]);

