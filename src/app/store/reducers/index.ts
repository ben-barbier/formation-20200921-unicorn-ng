import { ActionReducerMap } from '@ngrx/store';
import * as fromCart from './cart.reducer';
import * as fromUnicorns from './unicorns.reducer';

export interface EntityState {
    unicorns: fromUnicorns.UnicornsState;
    cart: fromCart.CartState;
}

export const reducers: ActionReducerMap<EntityState> = {
    unicorns: fromUnicorns.unicornsReducer,
    cart: fromCart.cartReducer,
    // here is where i put other reducers, when i have them
};
