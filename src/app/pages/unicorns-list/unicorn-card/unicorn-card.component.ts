import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    @Output() public delete = new EventEmitter<void>();

    public isInCart: boolean;

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cartService.isInCart(this.unicorn).subscribe(isInCart => {
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

    public onDelete(): void {
        this.delete.emit();
    }
}
