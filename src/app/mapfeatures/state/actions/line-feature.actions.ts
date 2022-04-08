import { createAction, props } from "@ngrx/store";
import { LineFeature } from "../../models/line-feature.model";

export const loadLineFeatures = createAction(
    '[Line Feature] Load Line Features',
);

export const lineFeaturesLoaded = createAction(
    '[Line Feature] Line Features Loaded',
    props<{lineFeatures: LineFeature[]}>()
)