'use strict';

import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import TopComponent from 'renderer/top.component';

@Component({
    selector: 'app',
    // template: `
    //     <router-outlet></router-outlet>
    // `,
    // directives: [ROUTER_DIRECTIVES],
    // precompile: [TopComponent]
    template: `<top-component></top-component>`,
    directives: [TopComponent]
})
export default class AppComponent extends OnInit {
    ngOnInit() {
        document.getElementById('test').addEventListener('click', () => {
            alert('click');
        }, false);
    }
}

