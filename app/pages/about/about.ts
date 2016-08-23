import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Tools } from './tools-tab';
import { Todos } from './todos-tab';
import { Source } from './source-tab';

@Component({
  templateUrl: 'build/pages/about/about.html',
})
export class AboutPage {

  private toolsTab: any;
  private todosTab: any;
  private sourceTab: any;

  /**
   * The application version.
   *
   * @type {string}
   */
  public version: string = 'v0.0.2-alpha';

  constructor(private navCtrl: NavController) {
    this.toolsTab = Tools;
    this.todosTab = Todos;
    this.sourceTab = Source;
  }

}
