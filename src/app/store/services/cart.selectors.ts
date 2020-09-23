import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { EntityState } from '../reducers';
import { CartState } from '../reducers/cart.reducer';

// selectors
const getEntityState = createFeatureSelector<EntityState>('entityCache');
const getCartState = createSelector(getEntityState, (state: EntityState) => state.cart);
const getCart = createSelector(getCartState, (state: CartState) => state.cart);
const getCartLoading = createSelector(getCartState, (state: CartState) => state.loading);

@Injectable()
export class CartSelectors {
    constructor(private store: Store<EntityState>) {}
    // selectors$
    cart$ = this.store.select(getCart);
    cartState$ = this.store.select(getCartState);
    loading$ = this.store.select(getCartLoading);
}
