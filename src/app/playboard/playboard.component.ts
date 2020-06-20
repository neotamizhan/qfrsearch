import { Component, OnInit } from '@angular/core';
import {QfrItem} from '../qfrItem';

@Component({
  selector: 'app-playboard',
  templateUrl: './playboard.component.html',
  styleUrls: ['./playboard.component.scss']
})
export class PlayboardComponent implements OnInit {

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
  }

}
