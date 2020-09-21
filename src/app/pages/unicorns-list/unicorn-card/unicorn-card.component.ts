import { Component, Input, OnInit } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
    @Input() public unicorn: Unicorn;

    constructor() {}

    ngOnInit(): void {}
}
