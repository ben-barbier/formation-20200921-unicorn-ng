import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
    constructor(private cartService: CartService) {}

    ngOnInit(): void {}

    public clearCart(): void {
        this.cartService.clearCart();
    }
}
