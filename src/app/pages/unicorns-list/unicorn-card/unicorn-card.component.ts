import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartDispatchers, CartSelectors, UnicornsDispatchers } from '../../../store/services';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnicornCardComponent implements OnInit {
    @Input() public unicorn: Unicorn;

    public isInCart: boolean;

    constructor(
        private cartDispatchers: CartDispatchers,
        private cartSelectors: CartSelectors,
        private unicornsDispatchers: UnicornsDispatchers,
    ) {}

    ngOnInit(): void {
        this.cartSelectors.isInCart$(this.unicorn).subscribe(isInCart => (this.isInCart = isInCart));
    }

    public toggleToCart(): void {
        if (this.isInCart) {
            this.cartDispatchers.removeFromCart(this.unicorn);
        } else {
            this.cartDispatchers.addToCart(this.unicorn);
        }
    }

    public onDelete(): void {
        this.unicornsDispatchers.deleteUnicorn(this.unicorn);
    }
}
