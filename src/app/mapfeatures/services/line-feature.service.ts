import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {LineFeature} from '../models/line-feature.model';

@Injectable({
    providedIn: 'root'
})
export class LineFeatureService {

    constructor(private http: HttpClient) { }

    getFeatures(): Observable<LineFeature[]>{
        return this.http.get<LineFeature[]>('http://localhost:8080/lines');
    }

}

