import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, share } from 'rxjs/operators';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
    selector: 'app-unicorns-list',
    templateUrl: './unicorns-list.component.html',
    styleUrls: ['./unicorns-list.component.scss'],
})
export class UnicornsListComponent implements OnInit {
    public unicorns: Unicorn[];

    public errors: string[] = [];

    constructor(private unicornsService: UnicornsService) {}

    ngOnInit(): void {
        this.unicornsService
            .getAllWithCapacitiesLabels()
            .pipe(
                share(),
                catchError(err => {
                    this.errors = this.errors.concat('Oups, il manque une capacité');
                    return throwError(err);
                }),
            )
            .subscribe(unicorns => (this.unicorns = unicorns));
    }

    deleteUnicorn(unicorn: Unicorn): void {
        this.unicornsService.delete(unicorn).subscribe(() => {
            this.unicorns = this.unicorns.filter(u => u.id !== unicorn.id);
        });
    }
}
