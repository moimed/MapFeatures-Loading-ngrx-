import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MapFeatureState } from "../map-feature.state";

export const selectFeatures = createFeatureSelector<MapFeatureState>('mapFeatures');

export const selectPointFeatures = createSelector(selectFeatures,
    (state: MapFeatureState) => state.pointFeatures   
)

export const selectLineFeatures = createSelector(selectFeatures,
    (state: MapFeatureState) => state.lineFeatures   
)

export const selectPolygonFeatures = createSelector(selectFeatures,
    (state: MapFeatureState) => state.polygonFeatures   
)

