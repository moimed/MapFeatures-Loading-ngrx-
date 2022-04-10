import { createReducer, on } from "@ngrx/store";
import { lineFeaturesLoaded } from "../actions/line-feature.actions";
import { addSelectedPoint, pointFeaturesLoaded, removeAllSelectedPoint, removeSelectedPoint } from "../actions/point-feature.actions";
import { polygonFeaturesLoaded } from "../actions/polygon-feature.actions";
import { MapFeatureState } from '../map-feature.state';

export const mapFeatureInitialState: MapFeatureState = {
        selectedFeatures: [],
        pointFeatures: [],
        lineFeatures: [],
        polygonFeatures: []
}

export const mapFeaturesReducer = createReducer(
    mapFeatureInitialState,
    on(pointFeaturesLoaded, (state, {pointFeatures}) => ({...state, pointFeatures})),
    on(lineFeaturesLoaded, (state, {lineFeatures}) => ({...state, lineFeatures})),
    on(polygonFeaturesLoaded, (state, {polygonFeatures}) => ({...state, polygonFeatures})),
    on(addSelectedPoint, (state, {selectedFeature}) => ({...state, selectedFeatures:
        [...state.selectedFeatures, selectedFeature]
    })),
    on(removeSelectedPoint, (state, {selectedFeature}) => ({...state, selectedFeatures:
        state.selectedFeatures.filter(feature => feature.id !== selectedFeature.id)
    })),
    on(removeAllSelectedPoint, (state) => ({...state, selectedFeatures: []
    })),
    
);