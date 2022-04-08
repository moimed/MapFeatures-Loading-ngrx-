export interface PolygonFeature{
    id: number,
    comment: string,
    created_at: Date,
    name: string,
    region: string, 
    geom:{
        type: "Polygon",
        coordinates: number[][][]
    },
    featureType: null,
    pano: null,
    user: null
}