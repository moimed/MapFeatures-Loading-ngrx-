import { LineFeature } from "../models/line-feature.model";
import { PointFeature } from "../models/point-feature.model";
import { PolygonFeature } from "../models/polygon-feature.model";

export interface MapFeatureState{
    pointFeatures: PointFeature[],
    lineFeatures: LineFeature[],
    polygonFeatures: PolygonFeature[],
}