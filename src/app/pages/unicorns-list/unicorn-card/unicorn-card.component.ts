import { Component, Input, OnInit } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
    @Input() public unicorn: Unicorn;

    public mesLicornes = []; // 1000;

    constructor() {
        const factures = [{ value: 10 }, { value: 20 }, { value: 30 }];

        const montantTotal = factures.reduce((acc, facture) => acc + facture.value, 0);
    }

    ngOnInit(): void {}
}
