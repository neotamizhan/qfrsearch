import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { QfrItem } from '../qfrItem';
import { QfrService } from '../qfr.service';
=======
import {QfrItem} from '../qfrItem';
>>>>>>> parent of 96ad19b... added components

@Component({
  selector: 'app-playboard',
  templateUrl: './playboard.component.html',
  styleUrls: ['./playboard.component.scss']
})
export class PlayboardComponent implements OnInit {

<<<<<<< HEAD
  episodes: QfrItem[];

  constructor(private qfrService: QfrService) { }

  getEpisodes(): void {
    this.qfrService.getAllEpisodes()
    .subscribe(e => this.episodes = e);
  }

  ngOnInit() {
    this.getEpisodes();
    console.log(this.episodes);
=======
  item: QfrItem = {
    episode_num: 1,
    date: new Date('2020-03-26'),
    movie: 'KOVIL PURA',
    song: 'Sangeethame',
    year: '1981',
    original_artists: ['Ilayaraja', 'S.Janaki', 'Vaali'],
    qfr_artists: ['Saindhavi Prakash'],
    episode_url: 'https://www.youtube.com/watch?v=UJqEL3OLQMo',
    song_url: 'https://www.youtube.com/watch?v=UJqEL3OLQMo'
  };
  constructor() { }

  ngOnInit() {
>>>>>>> parent of 96ad19b... added components
  }

}
