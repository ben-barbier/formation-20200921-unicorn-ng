import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsDispatchers, UnicornsSelectors } from '../../store/services';

@Component({
    selector: 'app-unicorns-list',
    templateUrl: './unicorns-list.component.html',
    styleUrls: ['./unicorns-list.component.scss'],
})
export class UnicornsListComponent implements OnInit {
    public unicorns$: Observable<Unicorn[]>;

    constructor(private unicornsDispatchers: UnicornsDispatchers, private unicornsSelectors: UnicornsSelectors) {}

    ngOnInit(): void {
        this.unicornsDispatchers.loadUnicorns();
        this.unicorns$ = this.unicornsSelectors.unicorns$;
    }
}
