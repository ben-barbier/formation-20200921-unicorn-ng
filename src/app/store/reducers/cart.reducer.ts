import { createReducer, on } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import * as CartActions from '../actions/cart.actions';

export interface CartState {
    cart: Unicorn[];
    loading: boolean;
    error: boolean;
}

export const initialState: CartState = {
    cart: [],
    loading: false,
    error: false,
};

export const cartReducer = createReducer(
    initialState,
    on(CartActions.addToCart, (state, { unicorn }) => ({
        cart: state.cart.concat(unicorn),
        loading: false,
        error: false,
    })),
    on(CartActions.removeFromCart, (state, { unicorn }) => ({
        cart: state.cart.filter(u => u.id !== unicorn.id),
        loading: false,
        error: false,
    })),
    on(CartActions.clearCart, () => ({
        cart: [],
        loading: false,
        error: false,
    })),
);
