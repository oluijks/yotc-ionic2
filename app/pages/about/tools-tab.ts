import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Api's / Tools</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-list-header>Api's used</ion-list-header>
      <ion-item detail-push><a href="https://developer.spotify.com/web-api/" target="_blank">Spotify</a></ion-item>
      <ion-item detail-push><a href="http://www.last.fm/api/scrobbling" target="_blank">Last.fm (Scrobbling API)</a></ion-item>
      <ion-list-header>Tools used</ion-list-header>
      <ion-item detail-push><a href="https://angular.io/" target="_blank">Angular 2.0.0-rc.5</a></ion-item>
      <ion-item detail-push><a href="https://github.com/antonybudianto/angular2-starter/" target="_blank">Angular2 Starter TypeScript 1.0.0-rc5</a></ion-item>
      <ion-item detail-push><a href="https://daneden.github.io/animate.css/" target="_blank">Animate.css v3.1.0</a></ion-item>
      <ion-item detail-push><a href="https://bootswatch.com/darkly/" target="_blank">Bootswatch (darkly) v3.3.7</a></ion-item>
      <ion-item detail-push><a href="http://getbootstrap.com/" target="_blank">Bootstrap v3.3.7</a></ion-item>
      <ion-item detail-push><a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code 1.4.0</a></ion-item>
    </ion-list>
  </ion-content>`
})
export class Tools {}
