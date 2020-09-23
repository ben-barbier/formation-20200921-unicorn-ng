import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UnicornsService } from '../../shared/services/unicorns.service';
import * as UnicornsActions from '../actions';

@Injectable()
export class UnicornsEffects {
    getUnicorns$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UnicornsActions.loadUnicorns),
            switchMap(() =>
                this.unicornsService.getAll().pipe(
                    map(unicorns => UnicornsActions.loadUnicornsSuccess({ unicorns })),
                    catchError(error => of(UnicornsActions.loadUnicornsError({ error }))),
                ),
            ),
        ),
    );

    deleteUnicorn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UnicornsActions.deleteUnicorn),
            switchMap(({ unicorn }) =>
                this.unicornsService.delete(unicorn).pipe(
                    map(() => UnicornsActions.deleteUnicornSuccess({ unicorn })),
                    catchError(error => of(UnicornsActions.deleteUnicornError({ error }))),
                ),
            ),
        ),
    );

    constructor(private actions$: Actions, private unicornsService: UnicornsService) {}
}
