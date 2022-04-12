import { createAction, props } from "@ngrx/store";
import { LineFeature } from "../../models/line-feature.model";
import { SelectedFeature } from "../../models/selected-feature.model";

export const loadLineFeatures = createAction(
    '[Line Feature] Load Line Features',
);

export const lineFeaturesLoaded = createAction(
    '[Line Feature] Line Features Loaded',
    props<{lineFeatures: LineFeature[]}>()
)

export const addSelectedLine = createAction(
    '[Line Feature] Select Line',
    props<{selectedFeature: SelectedFeature}>()
);

export const removeSelectedLine = createAction(
    '[Line Feature] Unselect Line',
    props<{selectedFeature: SelectedFeature}>()
);

export const removeAllSelectedLines = createAction(
    '[Line Feature] Unselect All Lines',
);