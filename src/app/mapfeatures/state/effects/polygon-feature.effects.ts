import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PolygonFeature } from '../../models/polygon-feature.model';
import { PolygonFeatureService } from '../../services/polygon-feature.service';
import { polygonFeaturesLoaded } from '../actions/polygon-feature.actions';

@Injectable()
export class PolygonFeatureEffects {

    polygonFeatures: PolygonFeature[] = [];

    loadPolygonFeatures$ = createEffect(() => this.actions$.pipe(
        ofType('[Polygon Feature] Load Polygon Features'),
        mergeMap(() => this.polygonFeatureService.getFeatures()
            .pipe(
                map(polygonFeatures => 
                    polygonFeaturesLoaded({polygonFeatures})
                ),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private polygonFeatureService: PolygonFeatureService,
    ) { }
}