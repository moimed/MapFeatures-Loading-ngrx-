import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { StoreModule } from '@ngrx/store';
import { mapFeaturesReducer } from './state/reducers/map-feature.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PointFeatureEffects } from './state/effects/point-feature.effects';
import { HttpClientModule } from '@angular/common/http';
import { LineFeatureEffects } from './state/effects/line-feature.effects';
import { PolygonFeatureEffects } from './state/effects/polygon-feature.effects';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
      
    StoreModule.forFeature(
      'mapFeatures', mapFeaturesReducer
    ),
    EffectsModule.forFeature([PointFeatureEffects, LineFeatureEffects, PolygonFeatureEffects])
  ],
  exports:[
    MapComponent
  ]
})
export class MapfeaturesModule { }
