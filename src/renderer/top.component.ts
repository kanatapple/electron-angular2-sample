'use strict';

import {Component} from '@angular/core';

@Component({
    selector: 'top-component',
    template: require('template/top')
})
export default class TopComponent {
    private versions = {
        node: (<any>window).process.versions.node,
        chrome: (<any>window).process.versions.chrome,
        electron: (<any>window).process.versions.electron,
    };
}

