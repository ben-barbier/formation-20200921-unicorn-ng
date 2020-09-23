import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartSelectors } from '../../../store/services';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    cart$ = this.cartSelectors.cart$;

    now$;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches),
        shareReplay(),
    );

    constructor(private breakpointObserver: BreakpointObserver, private cartSelectors: CartSelectors) {}

    ngOnInit(): void {
        this.now$ = interval(1000).pipe(map(() => moment().format('MMMM Do YYYY, h:mm:ss a')));
    }
}
