import { LineFeature } from "../models/line-feature.model";
import { PointFeature } from "../models/point-feature.model";
import { PolygonFeature } from "../models/polygon-feature.model";
import { SelectedFeature } from "../models/selected-feature.model";

export interface MapFeatureState{
    pointFeatures: PointFeature[],
    lineFeatures: LineFeature[],
    polygonFeatures: PolygonFeature[],
    selectedFeatures: SelectedFeature[]
}