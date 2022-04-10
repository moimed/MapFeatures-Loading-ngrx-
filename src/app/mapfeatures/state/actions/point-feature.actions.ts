import { createAction, props } from "@ngrx/store";
import { PointFeature } from "../../models/point-feature.model";
import { SelectedFeature } from "../../models/selected-feature.model";


export const loadPointFeatures = createAction(
    '[Point Feature] Load Point Features',
);

export const pointFeaturesLoaded = createAction(
    '[Point Feature] Point Features Loaded',
    props<{pointFeatures: PointFeature[]}>()
);

export const addSelectedPoint = createAction(
    '[Point Feature] Select Point',
    props<{selectedFeature: SelectedFeature}>()
);

export const removeSelectedPoint = createAction(
    '[Point Feature] Unselect Point',
    props<{selectedFeature: SelectedFeature}>()
);

export const removeAllSelectedPoint = createAction(
    '[Point Feature] Unselect All Points',
);

