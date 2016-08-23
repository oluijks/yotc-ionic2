import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AudioScrobblerService {

  public audioScrobblerApiKey: string;
  private _apiKey: string = 'bca59732cf313274b3bec34e8f20a0b3';
  private _apiBaseUrl: string = 'https://ws.audioscrobbler.com/2.0/';
  private _query: string;
  private _format: string = 'json';

  constructor(private _http: Http) {}

  getArtistInfo(artist: string, method = 'artist.getinfo') {
    this._query = `${this._apiBaseUrl}?method=${method}&artist=${artist}&api_key=${this._apiKey}&format=${this._format}`;

    return this._returnResponse(this._query);
  }

  _returnResponse(query: string) {
    return this._http.get(query).map(response => response.json());
  }
}

