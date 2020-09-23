import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import * as CartAction from '../actions/cart.actions';
import { EntityState } from '../reducers';

@Injectable()
export class CartDispatchers {
    constructor(private store: Store<EntityState>) {}

    addToCart(unicorn: Unicorn): void {
        this.store.dispatch(CartAction.addToCart({ unicorn }));
    }

    removeFromCart(unicorn: Unicorn): void {
        this.store.dispatch(CartAction.removeFromCart({ unicorn }));
    }

    clearCart(): void {
        this.store.dispatch(CartAction.clearCart());
    }
}
