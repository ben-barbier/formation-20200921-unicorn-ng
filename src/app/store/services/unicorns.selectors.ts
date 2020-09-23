import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { EntityState } from '../reducers';
import { UnicornsState } from '../reducers/unicorns.reducer';

// selectors
const getEntityState = createFeatureSelector<EntityState>('entityCache');
const getUnicornsState = createSelector(getEntityState, (state: EntityState) => state.unicorns);
const getUnicorns = createSelector(getUnicornsState, (state: UnicornsState) => state.unicorns);
const getUnicornsLoading = createSelector(getUnicornsState, (state: UnicornsState) => state.loading);

@Injectable()
export class UnicornsSelectors {
    constructor(private store: Store<EntityState>) {}
    // selectors$
    unicorns$ = this.store.select(getUnicorns);
    unicornsState$ = this.store.select(getUnicornsState);
    loading$ = this.store.select(getUnicornsLoading);
}
