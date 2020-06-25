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

  getAllEpisodes(): Observable<QfrItem[]> {
    return of(this.episodes);
  }

  getLatestEpisode(): Observable<QfrItem[]> {    
    const e = [];
    e.push(this.db[this.db.length - 1]);
    return of(e);
  }
}
