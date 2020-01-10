// 这是模块

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-testcomponent',
    template: '<router-outlet></router-outlet>'
})

export class TestComponent implements OnInit, OnDestroy {
    ngOnInit(): void {

    }
    ngOnDestroy(): void {

    }
}
