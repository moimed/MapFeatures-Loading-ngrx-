import { Component, OnInit } from '@angular/core';
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import LayerList from "@arcgis/core/widgets/LayerList";
import Expand from "@arcgis/core/widgets/Expand";
import { Store } from '@ngrx/store';
import { selectLineFeatures, selectPointFeatures, selectPolygonFeatures } from '../../state/selectors/point-feature.selectors';
import { PointFeature } from '../../models/point-feature.model';
import { LineFeature } from '../../models/line-feature.model';
import { PolygonFeature } from '../../models/polygon-feature.model';

import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Point from "@arcgis/core/geometry/Point";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import Polyline from "@arcgis/core/geometry/Polyline";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import Polygon from "@arcgis/core/geometry/Polygon";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  view: any = null;
  map = new Map({
    basemap: 'arcgis-dark-gray',
  });
  constructor(private store: Store) { }

  initializeMap(): Promise<any> {

    esriConfig.apiKey =
      'AAPK24183e4374614fd6a5fcfec79f73fd6cQSIA4i9xs1nLnsr84kvTNnN3V4mld2uDRp5TbJYT6rS57Uu1E2ArpkJ1nh-wBWMI';

    const container = 'map_container';

    const view = new MapView({
      map: this.map,
      center: [-7.6133, 33.59],
      zoom: 13,
      container,
    });

    let layerList = new LayerList({
      container: document.createElement('div'),
      view: view,
    });

    let layerListExpand = new Expand({
      expandIconClass: 'esri-icon-layers',
      view: view,
      content: layerList,
    });

    view.ui.add(layerListExpand, 'top-left');

    this.view = view;
    return this.view.when();
  }

  ngOnInit(): any {

    this.store.dispatch({ type: '[Point Feature] Load Point Features' });
    this.store.dispatch({ type: '[Line Feature] Load Line Features' });
    this.store.dispatch({ type: '[Polygon Feature] Load Polygon Features' });
    this.initializeMap().then(() => {
      console.log('The map is ready.');
    }).then(() => {
      this.displayPointFeatures();
      this.displayLineFeatures();
      this.displayPolygonFeatures();
          }).catch((error) => console.error(error));
    ;

  }

  makePointGraphics = (pointFeatures: PointFeature[]): Graphic[] => {
    return pointFeatures.map((point) => {
      return new Graphic({
        attributes: {
          name: point.name,
          comment: point.comment,
          region: point.region,
        },
        geometry: new Point({
          longitude: point.geom.coordinates[0],
          latitude: point.geom.coordinates[1],
        }),
      });
    });
  };

  makeLineGraphics = (lineFeatures: LineFeature[]): Graphic[] => {
    return lineFeatures.map((line) => {
      return new Graphic({
        attributes: {
          name: line.name,
          comment: line.comment,
          region: line.region,
        },
        geometry: new Polyline({
          paths: [line.geom.coordinates]
        }),
      });
    });
  };

  makePolygonGraphics = (polygonFeatures: PolygonFeature[]): Graphic[] => {
    return polygonFeatures.map((polygon) => {
      return new Graphic({
        attributes: {
          name: polygon.name,
          comment: polygon.comment,
          region: polygon.region,
        },
        geometry: new Polygon({
          rings: polygon.geom.coordinates
        }),
      });
    });
  };


  displayPointFeatures() {
    let pointFeatures$ = this.store.select(selectPointFeatures);
    pointFeatures$.subscribe(pf => {

      // Create FeatureLayer with graphics
      let pointsFeatureLayer = new FeatureLayer({
        title: 'Point features',
        source: this.makePointGraphics(pf),
        // editingEnabled: true,
        objectIdField: 'ObjectID',
        renderer: new SimpleRenderer({
          symbol: new SimpleMarkerSymbol({
            color: 'green',
            outline: {
              color: [255, 255, 255],
              width: 1.5,
            },
          }),
        }),


        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid"
          },
          {
            name: 'name',
            alias: 'name',
            type: 'string',
          },
          {
            name: 'comment',
            alias: 'comment',
            type: 'string',
          },
          {
            name: 'region',
            alias: 'region',
            type: 'string',
          },
        ],
      });
      this.map.add(pointsFeatureLayer);
      console.log("Point Features Loaded");
    });
  }


  displayLineFeatures() {
    let lineFeatures$ = this.store.select(selectLineFeatures);
    lineFeatures$.subscribe(lf => {

      // Create FeatureLayer with graphics
      let linesFeatureLayer = new FeatureLayer({
        title: 'Line features',
        source: this.makeLineGraphics(lf),
        // editingEnabled: true,
        objectIdField: 'ObjectID',
        renderer: new SimpleRenderer({
          symbol: new SimpleLineSymbol({
            color: 'orange',
            width: 2
          }),
        }),


        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid"
          },
          {
            name: 'name',
            alias: 'name',
            type: 'string',
          },
          {
            name: 'comment',
            alias: 'comment',
            type: 'string',
          },
          {
            name: 'region',
            alias: 'region',
            type: 'string',
          },
        ],
      });
      this.map.add(linesFeatureLayer);
      console.log("Line Features Loaded");
    });
  }

  displayPolygonFeatures() {
    let polygonFeatures$ = this.store.select(selectPolygonFeatures);
    
    polygonFeatures$.subscribe(pf => {
      // Create FeatureLayer with graphics
      let polygonsFeatureLayer = new FeatureLayer({
        title: 'Polygon features',
        source: this.makePolygonGraphics(pf),
        // editingEnabled: true,
        objectIdField: 'ObjectID',
        renderer: new SimpleRenderer({
          symbol: new SimpleFillSymbol({
            style: "solid",
            color: 'gray',
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          }),
        }),


        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid"
          },
          {
            name: 'name',
            alias: 'name',
            type: 'string',
          },
          {
            name: 'comment',
            alias: 'comment',
            type: 'string',
          },
          {
            name: 'region',
            alias: 'region',
            type: 'string',
          },
        ],
      });
      this.map.add(polygonsFeatureLayer);
      console.log("Polygon Features Loaded");
    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      this.view.destroy();
    }
  }

}
