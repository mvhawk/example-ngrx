import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ShowContentService } from 'src/app/modules/show-content/services/show-content.service';

@Injectable()
export class ItemsEffects {

    loadItems$ = createEffect(() => this.actions$.pipe(
        ofType('[Item List] Load items'),
        mergeMap(() => this.showContentService.getItems()
            .pipe(
                map(items => ({ type: '[Item List] Loaded success', items })),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private showContentService: ShowContentService
    ) { }
}
