import { createAction, props } from "@ngrx/store";
import { PointFeature } from "../../models/point-feature.model";

export const loadPointFeatures = createAction(
    '[Point Feature] Load Point Features',
);

export const pointFeaturesLoaded = createAction(
    '[Point Feature] Point Features Loaded',
    props<{pointFeatures: PointFeature[]}>()
)

