import { Component, OnInit } from '@angular/core';

declare var MapmyIndia: any;
declare var L: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Reactive Map Demo App';
  public map: any;
  public poly1: any;
  public poly: any = [];
  public markers: any = [];

  constructor() {}

  ngOnInit(): void {
    this.map = new MapmyIndia.Map('map', {
      center: [28.54, 77.26],
      zoom: 12,
    });
  }

  add_marker() {
    // tslint:disable-next-line: max-line-length
    const marker = L.marker([28.54, 77.26]).addTo(this.map);
    this.markers.push(marker);
  }

  remove_marker() {
    var markerlength = this.markers.length;
    if (markerlength > 0) {
      for (var i = 0; i < markerlength; i++) {
        this.map.removeLayer(this.markers[i]);
      }
      this.markers = new Array();
    }
  }

  zoomIn() {
    this.map.zoomIn();
  }

  zoomOut() {
    this.map.zoomOut();
  }

  moveToCentre() {
    var pt = new L.LatLng(28.549948, 77.268241);
    this.map.setView(pt);
  }

  addPolyline() {
    var center = new L.LatLng(28.549948, 77.268241);
    var pts1 = [
      new L.LatLng(center.lat - 150 / 10000, center.lng - 150 / 10000),
      new L.LatLng(center.lat + 0 / 10000, center.lng - 50 / 10000),
      new L.LatLng(center.lat + 50 / 10000, center.lng - 100 / 10000),
      new L.LatLng(center.lat + 70 / 10000, center.lng + 50 / 10000),
      new L.LatLng(center.lat - 70 / 10000, center.lng + 100 / 10000),
    ];

    /*parameters of polyline*/
    var poly1param = {
      color: 'red',
      weight: 4,
      opacity: 1,
    };
    this.poly1 = new L.Polyline(
      pts1,
      poly1param
    ); /*polyline with given points and default color is created*/
    this.map.addLayer(this.poly1);
    this.poly.push(this.poly1);
  }

  removePolyline() {
    var polylength = this.poly.length;
    if (polylength > 0) {
      for (var i = 0; i < polylength; i++) {
        this.map.removeLayer(this.poly[i]);
      }
      this.poly = new Array();
    }
  }
}
