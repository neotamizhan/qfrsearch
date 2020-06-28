import { Injectable } from '@angular/core';
import * as data from '../../data.json';
import { QfrItem } from './qfrItem';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QfrService {

  episodes: QfrItem[];
  db: QfrItem[];

  constructor() {
    this.db = (data as any).default;
  }

  getOriginalArtists(): Observable<any[]> {
    const originals = [];
    this.db.map(e => e.original_artists).forEach(e => e.forEach(a => originals.push(a)));
    return of(this.getArtistCount(originals));
  }

  getCoverArtists(): Observable<any[]> {
    const covers = [];
    this.db.map(e => e.cover_artists).forEach(e => e.forEach(a => covers.push(a)));
    return of(this.getArtistCount(covers));
  }

  getArtistCount(artists: string[]) {
    const counts = {};

    artists.forEach(artist => counts[artist] = counts[artist] ? counts[artist] + 1 : 1);
    const arrayTags = Object.entries<number>(counts);

    arrayTags.sort((a, b) => b[1] - a[1]);
    return arrayTags;
  }

  getAllEpisodes(): Observable<QfrItem[]> {
    this.episodes = this.db;
    return of(this.episodes);
  }

  getLatestEpisode(): Observable<QfrItem[]> {
    const e = [];
    e.push(this.db[this.db.length - 1]);
    return of(e);
  }

  getEpisodesByOriginals(artist: string): Observable<QfrItem[]> {
    this.episodes = this.db.filter(e => e.original_artists.includes(artist));
    return of(this.episodes);
  }

  getEpisodesByCovers(artist: string): Observable<QfrItem[]> {
    this.episodes = this.db.filter(e => e.cover_artists.includes(artist));
    return of(this.episodes);
  }
}
