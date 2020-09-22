import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Unicorn } from './shared/models/unicorn.model';
import { CapacitiesService } from './shared/services/capacities.service';
import { UnicornsService } from './shared/services/unicorns.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'unicorn-ng';

    public unicornsMore30Kg$: Observable<Unicorn[]>;

    constructor(unicornsService: UnicornsService, capacitiesService: CapacitiesService) {
        // this.unicornsMore30Kg$ = unicornsService.getUnicornsMore(30).pipe(
        //     concatAll(),
        //     map(u => ({ ...u, name: u.name.toUpperCase() })),
        //     tap(u => console.log(u)),
        //     toArray(),
        // );
    }
}
