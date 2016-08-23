import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SpotifyService } from '../../providers/spotify-service/spotify-service';
import { AudioScrobblerService } from '../../providers/audio-scrobbler-service/audio-scrobbler-service';
import { Artist } from '../../providers/models/Artist';
import { ArtistInfo } from '../../providers/models/ArtistInfo';
import { Album } from '../../providers/models/Album';

@Component({
  templateUrl: 'build/pages/artist/artist.html',
  providers: [SpotifyService, AudioScrobblerService]
})
export class ArtistPage implements OnInit, OnDestroy {

  artist: Artist[];
  albums: Album[];
  artistInfo: ArtistInfo[];
  sub: any;
  public title: string;

  public artistId: any;

  constructor(
    private navCtrl: NavController,
    private params: NavParams,
    private _spotifyService: SpotifyService,
    private _audioScrobblerService: AudioScrobblerService) {
    this.artistId = params.get('artistId');
  }

  /**
   * initialize.
   */
  ngOnInit() {
    console.log('Artist component initialized.');

    // Get the artist information from the Spotify Service.
    this.sub =
      this._spotifyService.getArtist(this.artistId)
        .subscribe(artist => {
          this.artist = artist;
          this.title = artist.name;
          // Get artist bio from Last.fm
          this._getArtistInfo(artist.name);
        });
    this._getAlbums(this.artistId);
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

  _getArtistInfo(artistName: string) {
    this._audioScrobblerService.getArtistInfo(artistName)
      .subscribe(artistInfo => {
        this.artistInfo = artistInfo.artist.bio.summary;
        // console.debug(artistInfo);
      });
  }

  _getAlbums(albumId: string) {
    this._spotifyService.getAlbums(albumId)
      .subscribe(albums => {
        this.albums = albums.items;
        // console.debug(albums.items);
      });
  }

}
