import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, share } from 'rxjs/operators';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
    selector: 'app-unicorns-list',
    templateUrl: './unicorns-list.component.html',
    styleUrls: ['./unicorns-list.component.scss'],
})
export class UnicornsListComponent implements OnInit {
    public unicorns$: Observable<Unicorn[]>;

    public errors: string[] = [];

    constructor(private unicornsService: UnicornsService) {}

    ngOnInit(): void {
        this.unicorns$ = this.unicornsService.getAllWithCapacitiesLabels().pipe(
            share(),
            catchError(err => {
                this.errors = this.errors.concat('Oups, il manque une capacité');
                return throwError(err);
            }),
        );
    }
}
