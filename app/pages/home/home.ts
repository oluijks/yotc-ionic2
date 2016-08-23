import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { ArtistPage } from '../artist/artist';

import { SpotifyService } from '../../providers/spotify-service/spotify-service';
import { Artist } from '../../providers/models/Artist';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [SpotifyService]
})
export class HomePage implements OnInit, OnDestroy {

  private errorMessage: string;
  private offset: number = 0;
  private limit: number = 10;
  private maxResult: number;
  private disableNext: boolean = false;
  private disablePrevious: boolean = false;
  private isSearching: boolean = false;
  private sub: any;
  private linkTitle: any;
  private searchTerm: string = '';
  private searchResult: Artist[];
  private title = 'Year of the cat';
  private loader: any;

  constructor(private navCtrl: NavController, private _spotifyService: SpotifyService, private loadingController: LoadingController) {}

  /*
  presentLoading() {
    this.loader = this.loadingController.create({
      content: "Please wait..."
    });
    this.loader.present();
  }
  */

  clearSearch(ev: any) {
    this._resetSearchValues();
  }

  navigate(id: string) {
    /* console.log(id); */
    this.navCtrl.push(ArtistPage,{
      artistId: id,
    });
  }

  /**
   * Search the Spotify API.
   */
  searchSpotify(ev: any, n: boolean = false) {
    // console.debug('=========================');
    // console.debug(ev);
    // console.debug('=========================');

    if (!n) {
      if (ev.target.type !== 'search') {
        return;
      } else {
        this.searchTerm = ev.target.value;
      }
    }

    this.isSearching = true;
    // this.presentLoading();

    if (this.searchTerm.trim() !== '' && this.searchTerm.trim().length > 2) {
      this._spotifyService.searchSpotify(this.searchTerm, '', this.offset, this.limit)
        .subscribe(
          response => {
            this.searchResult = response.artists.items;
            this.maxResult = response.artists.total;
            // console.debug(response.artists);
            // this.loader.dismiss();
        },
        error => { this.errorMessage = <any>error; console.error(this.errorMessage); }
      );
    } else {
      this.loader.dismiss();
      this._resetSearchValues();
    }
  }

  /**
   * Get next list of artists.
   *
   * @returns
   */
  nextArtists(ev: any) {
    this.disableNext = false;
    this.disablePrevious = false;

    this.offset = this.offset + this.limit;

    if (this.offset >= this.maxResult) {
      this.offset = this.offset - this.limit;
      this.disableNext = true;
      return;
    }

    this.searchSpotify(ev, true);
  }

  /**
   * Get previous list of artists.
   *
   * @returns
   */
  previousArtists(ev: any) {
    this.disableNext = false;
    this.disablePrevious = false;

    this.offset = this.offset - this.limit;

    if (this.offset < 0) {
      this.offset = 0;
      this.disablePrevious = true;
      return;
    }

    this.searchSpotify(ev, true);
  }

  /**
   * Reset variables.
   */
  _resetSearchValues() {
    this.limit = 10;
    this.offset = 0;
    this.searchResult = [];
    this.isSearching = false;
    this.disableNext = false;
    this.disablePrevious = false;
  }

  /**
   * Initialize.
   */
  ngOnInit() {
    console.log('Search component initialized.');
  }

  /**
   * Clean up.
   */
  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }
}
