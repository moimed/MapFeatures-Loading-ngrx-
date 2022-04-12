import { createAction, props } from "@ngrx/store";
import { SelectedFeature } from "../../models/selected-feature.model";

export const addSelectedMapFeature = createAction(
    '[Map Feature] Select Map Feature',
    props<{selectedFeature: SelectedFeature}>()
);

export const removeSelectedMapFeature = createAction(
    '[Map Feature] Unselect Map Feature',
    props<{selectedFeature: SelectedFeature}>()
);

export const removeAllSelectedMapFeatures = createAction(
    '[Map Feature] Unselect All Map Features',
    props<{featureType: string}>()
);


