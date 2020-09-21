import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
    selector: 'app-unicorns-list',
    templateUrl: './unicorns-list.component.html',
    styleUrls: ['./unicorns-list.component.scss'],
})
export class UnicornsListComponent implements OnInit {
    public unicorns$: Observable<Unicorn[]>;

    constructor(private unicornsService: UnicornsService) {}

    ngOnInit(): void {
        this.unicorns$ = this.unicornsService.getAll();
    }
}
