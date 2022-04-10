import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LineFeatureService } from '../../services/line-feature.service';
import { lineFeaturesLoaded } from '../actions/line-feature.actions';

@Injectable()
export class LineFeatureEffects {
    loadLineFeatures$ = createEffect(() => this.actions$.pipe(
        ofType('[Line Feature] Load Line Features'),
        mergeMap(() => this.lineFeatureService.getFeatures()
            .pipe(
                map(lineFeatures => 
                    lineFeaturesLoaded({lineFeatures})
                ),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private lineFeatureService: LineFeatureService,
    ) { }
}