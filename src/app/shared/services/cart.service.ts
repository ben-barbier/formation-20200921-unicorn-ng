import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    public cart$ = new BehaviorSubject<Unicorn[]>([]);

    public isInCart(unicorn: Unicorn): Observable<boolean> {
        return this.cart$.pipe(map(cart => cart.some(u => u.id === unicorn.id)));
    }

    public addToCart(unicorn: Unicorn): void {
        this.cart$.next(this.cart$.getValue().concat(unicorn));
    }

    public removeFromCart(unicorn: Unicorn): void {
        this.cart$.next(this.cart$.getValue().filter(u => u.id !== unicorn.id));
    }

    public clearCart(): void {
        this.cart$.next([]);
    }
}
