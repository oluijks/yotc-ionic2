import { Component } from '@angular/core';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Source Code</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    <ion-card>
      <ion-card-header>
        Source Code
      </ion-card-header>
      <ion-card-content>
        <button secondary full round (click)="forkMeOnGitHub()">
          <ion-icon name="logo-github"></ion-icon>
          Fork me on GitHub
        </button>
      </ion-card-content>
    </ion-card>
  </ion-content>`
})
export class Source {
  forkMeOnGitHub() {
    window.location.href = 'https://github.com/oluijks/yotc/';
  }
}
