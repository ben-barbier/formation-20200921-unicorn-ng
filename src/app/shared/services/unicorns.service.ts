import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, forkJoin, from, Observable } from 'rxjs';
import { catchError, concatAll, filter, map, mergeMap, pluck, toArray } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Capacity } from '../models/capacity.model';
import { Unicorn } from '../models/unicorn.model';
import { CapacitiesService } from './capacities.service';

@Injectable({
    providedIn: 'root',
})
export class UnicornsService {
    constructor(private http: HttpClient, private capacitiesService: CapacitiesService) {}

    getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
    }

    getUnicornsMore(kg: number): Observable<Unicorn[]> {
        return this.getAll().pipe(
            concatAll(),
            filter(u => u.weight > kg),
            toArray(),
        );
    }

    getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
        return this.getAll().pipe(
            concatAll(),
            mergeMap(unicorn =>
                from(unicorn.capacities).pipe(
                    mergeMap(capacityId => this.capacitiesService.get(capacityId)),
                    catchError(() => EMPTY),
                    pluck('label'),
                    toArray(),
                    map(labels => ({ ...unicorn, capacityLabels: labels })),
                ),
            ),
            toArray(),
            map(unicorns => unicorns.sort((u1, u2) => u1.id - u2.id)),
        );
    }

    getAllWithCapacitiesLabels2(): Observable<Unicorn[]> {
        return forkJoin([this.getAll(), this.capacitiesService.getAll()]).pipe(
            map(([unicorns, capacities]: [Unicorn[], Capacity[]]) =>
                unicorns.map(unicorn => ({
                    ...unicorn,
                    capacityLabels: unicorn.capacities.map(
                        capacityId => capacities.find(c => c.id === capacityId).label,
                    ),
                })),
            ),
        );
    }
}
