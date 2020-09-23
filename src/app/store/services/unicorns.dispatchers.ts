import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import * as UnicornsAction from '../actions/unicorns.actions';
import { EntityState } from '../reducers';

@Injectable()
export class UnicornsDispatchers {
    constructor(private store: Store<EntityState>) {}

    deleteUnicorn(unicorn: Unicorn): void {
        this.store.dispatch(UnicornsAction.deleteUnicorn({ unicorn }));
    }

    loadUnicorns(): void {
        this.store.dispatch(UnicornsAction.loadUnicorns());
    }
}
