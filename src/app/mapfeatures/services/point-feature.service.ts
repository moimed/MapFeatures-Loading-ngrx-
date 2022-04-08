import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {PointFeature} from '../models/point-feature.model';

@Injectable({
    providedIn: 'root'
})
export class PointFeatureService {

    constructor(private http: HttpClient) { }

    getFeatures(): Observable<PointFeature[]>{
        return this.http.get<PointFeature[]>('http://localhost:8080/points')
    }
}

