import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PointFeatureService } from '../../services/point-feature.service';
import { pointFeaturesLoaded } from '../actions/point-feature.actions';

@Injectable()
export class PointFeatureEffects {

    loadPointFeatures$ = createEffect(() => this.actions$.pipe(
        ofType('[Point Feature] Load Point Features'),
        mergeMap(() => this.pointFeatureService.getFeatures()
            .pipe(
                map(pointFeatures => 
                    pointFeaturesLoaded({pointFeatures})
                ),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private pointFeatureService: PointFeatureService,
    ) { }
}