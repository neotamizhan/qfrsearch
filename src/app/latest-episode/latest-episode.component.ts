import { Component, OnInit } from '@angular/core';
import { QfrService } from '../qfr.service';
import { QfrItem } from '../qfrItem';

@Component({
  selector: 'app-latest-episode',
  templateUrl: '../playboard/playboard.component.html'
})
export class LatestEpisodeComponent implements OnInit {

  episodes: QfrItem[];
  constructor(private qfrService: QfrService) { }

  getEpisodes(): void {
    this.qfrService.getLatestEpisode()
    .subscribe(e => this.episodes = e);
    console.log("Latest" + JSON.stringify(this.episodes));
  }

  ngOnInit() {
    this.getEpisodes();
  }

}
