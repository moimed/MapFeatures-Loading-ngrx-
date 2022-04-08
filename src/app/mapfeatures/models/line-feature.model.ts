export interface LineFeature{
    id: number,
    comment: string,
    created_at: Date,
    name: string,
    region: string, 
    geom:{
        type: "LineString",
        coordinates: number[][]
    },
    featureType: null,
    pano: null,
    user: null
}