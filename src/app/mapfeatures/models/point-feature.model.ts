export interface PointFeature{
    id: number,
    comment: string,
    created_at: Date,
    name: string,
    region: string, 
    geom:{
        type: "Point",
        coordinates: number[]
    },
    featureType: null,
    pano: null,
    user: null
}