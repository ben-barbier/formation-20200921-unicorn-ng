import { Component, OnInit } from '@angular/core';
import { CartDispatchers } from '../../store/services';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
    constructor(private cartDispatchers: CartDispatchers) {}

    ngOnInit(): void {}

    public clearCart(): void {
        this.cartDispatchers.clearCart();
    }
}
