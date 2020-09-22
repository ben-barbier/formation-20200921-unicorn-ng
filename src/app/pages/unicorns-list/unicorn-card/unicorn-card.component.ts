import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnicornCardComponent implements OnInit {
    @Input() public unicorn: Unicorn;

    public isInCart: boolean;

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cartService.isInCart(this.unicorn).subscribe(isInCart => {
            console.count('UnicornCardComponent.isInCart');
            this.isInCart = isInCart;
        });
    }

    public toggleToCart(): void {
        if (this.isInCart) {
            this.cartService.removeFromCart(this.unicorn);
        } else {
            this.cartService.addToCart(this.unicorn);
        }
    }
}
