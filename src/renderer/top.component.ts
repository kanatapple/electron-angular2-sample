'use strict';

import {Component} from '@angular/core';

@Component({
    template: require('template/top')
})
export default class TopComponent {
    private versions = {
        node: (<any>window).process.versions.node,
        chrome: (<any>window).process.versions.chrome,
        electron: (<any>window).process.versions.electron,
    };
}

