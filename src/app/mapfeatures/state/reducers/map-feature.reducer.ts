import { createReducer, on } from "@ngrx/store";
import { lineFeaturesLoaded } from "../actions/line-feature.actions";
import { pointFeaturesLoaded } from "../actions/point-feature.actions";
import { polygonFeaturesLoaded } from "../actions/polygon-feature.actions";
import { MapFeatureState } from '../map-feature.state';

export const mapFeatureInitialState: MapFeatureState[] = [];

export const mapFeaturesReducer = createReducer(
    mapFeatureInitialState,
    on(pointFeaturesLoaded, (state, {pointFeatures}) => ({...state, pointFeatures})),
    on(lineFeaturesLoaded, (state, {lineFeatures}) => ({...state, lineFeatures})),
    on(polygonFeaturesLoaded, (state, {polygonFeatures}) => ({...state, polygonFeatures})),
);