import { Component, OnInit } from '@angular/core';

/**
 * Todo interface.
 *
 * @interface ITodo
 */
interface ITodo {
  name: string;
  done: boolean;
}

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Todos</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-list-header>Todos</ion-list-header>
      <ion-item *ngFor="let todo of todos" [class.done]="todo.done">
        {{ todo.name }}
      </ion-item>
    </ion-list>
  </ion-content>`
})
export class Todos implements OnInit {
  /**
   * List of todos.
   *
   * @type {ITodo[]}
   */
  public todos: ITodo[];

  /**
   * Initialize.
   */
  ngOnInit() {
    console.log('About component initialized.');

    this.todos = [
        { 'name': 'Search for artists', 'done': true },
        { 'name': 'Login to Spotify', 'done': false },
        { 'name': 'Search for tracks', 'done': false },
        { 'name': 'Favourite artists, albums, playlists', 'done': false },
        { 'name': '(Personal) app settings', 'done': false },
        { 'name': 'Pagination of artists list', 'done': false },
        { 'name': 'Multi language', 'done': false },
        { 'name': 'Theming', 'done': false },
        { 'name': 'Offline support', 'done': true }
    ];
  }

}
