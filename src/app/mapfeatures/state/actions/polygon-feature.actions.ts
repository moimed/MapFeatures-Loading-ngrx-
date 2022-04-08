import { createAction, props } from "@ngrx/store";
import { PolygonFeature } from "../../models/polygon-feature.model";

export const loadPolygonFeatures = createAction(
    '[Polygon Feature] Load Polygon Features',
);

export const polygonFeaturesLoaded = createAction(
    '[Polygon Feature] Polygon Features Loaded',
    props<{polygonFeatures: PolygonFeature[]}>()
)