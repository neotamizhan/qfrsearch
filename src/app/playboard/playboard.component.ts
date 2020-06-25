import { Component, OnInit } from '@angular/core';
import { QfrItem } from '../qfrItem';
import { QfrService } from '../qfr.service';

@Component({
  selector: 'app-playboard',
  templateUrl: './playboard.component.html',
  styleUrls: ['./playboard.component.scss']
})
export class PlayboardComponent implements OnInit {

  episodes: QfrItem[];

  constructor(private qfrService: QfrService) { }

  getEpisodes():void {
    this.qfrService.getAllEpisodes()
    .subscribe(e => this.episodes = e);
  }

  ngOnInit() {
    this.getEpisodes();
  }

}
