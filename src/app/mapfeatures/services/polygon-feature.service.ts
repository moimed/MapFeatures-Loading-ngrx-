import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {PolygonFeature} from '../models/polygon-feature.model';

@Injectable({
    providedIn: 'root'
})
export class PolygonFeatureService {

    constructor(private http: HttpClient) { }

    getFeatures(): Observable<PolygonFeature[]>{
        return this.http.get<PolygonFeature[]>('http://localhost:8080/polygons')
    }

}

