import { createReducer, on } from "@ngrx/store";
import { lineFeaturesLoaded } from "../actions/line-feature.actions";
import { addSelectedMapFeature, removeAllSelectedMapFeatures, removeSelectedMapFeature } from "../actions/map-feature.actions";
import { pointFeaturesLoaded } from "../actions/point-feature.actions";
import { polygonFeaturesLoaded } from "../actions/polygon-feature.actions";
import { MapFeatureState } from '../map-feature.state';

export const mapFeatureInitialState: MapFeatureState = {
    selectedFeatures: [],
    pointFeatures: [
        {
            id: 1,
            name: "",
            comment: "",
            created_at: new Date(),
            region: "",
            pano: null,
            featureType: null,
            user: null,
            geom: {
                type: 'Point',
                coordinates: [
                    -7.658412888700301,
                    33.52758955314891
                ]
            }
        }
    ],
    lineFeatures: [],
    polygonFeatures: []
}

export const mapFeaturesReducer = createReducer(
    mapFeatureInitialState,
    on(pointFeaturesLoaded, (state, { pointFeatures }) => ({ ...state, pointFeatures })),
    on(lineFeaturesLoaded, (state, { lineFeatures }) => ({ ...state, lineFeatures })),
    on(polygonFeaturesLoaded, (state, { polygonFeatures }) => ({ ...state, polygonFeatures })),
    on(addSelectedMapFeature, (state, { selectedFeature }) => ({
        ...state, selectedFeatures:
            [...state.selectedFeatures, selectedFeature]
    })),
    on(removeSelectedMapFeature, (state, { selectedFeature }) => {
        return {
            ...state,
            selectedFeatures:
                state.selectedFeatures.filter(feature => feature.id !== selectedFeature.id || feature.type !== selectedFeature.type)
        }
    }),
    on(removeAllSelectedMapFeatures, (state, { featureType }) => ({
        ...state, selectedFeatures: state.selectedFeatures.filter(feature => feature.type !== featureType)
    })),
);