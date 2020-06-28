import { Component, OnInit } from '@angular/core';
import { QfrService } from '../qfr.service';
import { QfrItem } from '../qfrItem';
import { PlayboardComponent } from '../playboard/playboard.component';

@Component({
  selector: 'app-latest-episode',
  templateUrl: '../playboard/playboard.component.html'
})
export class LatestEpisodeComponent extends PlayboardComponent {

  episodes: QfrItem[];

  getEpisodes(): void {
    this.qfrService.getLatestEpisode()
    .subscribe(e => this.episodes = e);
    console.log('Latest' + JSON.stringify(this.episodes));
  }

}
