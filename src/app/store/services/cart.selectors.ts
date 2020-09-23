import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { EntityState } from '../reducers';
import { CartState } from '../reducers/cart.reducer';

// selectors
const getEntityState = createFeatureSelector<EntityState>('entityCache');
const getCartState = createSelector(getEntityState, (state: EntityState) => state.cart);
const getCart = createSelector(getCartState, (state: CartState) => state.cart);
const getCartLoading = createSelector(getCartState, (state: CartState) => state.loading);
const isInCart = createSelector(getCart, (state: Unicorn[], props) => state.some(u => u.id === props.unicorn.id));

@Injectable()
export class CartSelectors {
    constructor(private store: Store<EntityState>) {}
    // selectors$
    cart$ = this.store.select(getCart);
    cartState$ = this.store.select(getCartState);
    loading$ = this.store.select(getCartLoading);
    isInCart$ = (unicorn: Unicorn) => this.store.select(isInCart, { unicorn });
}
