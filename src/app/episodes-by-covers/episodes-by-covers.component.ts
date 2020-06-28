import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QfrService } from '../qfr.service';
import { QfrItem } from '../qfrItem';

@Component({
  selector: 'app-episodes-by-covers',
  templateUrl: '../playboard/playboard.component.html'
})
export class EpisodesByCoversComponent implements OnInit {

  message = '';
  episodes: QfrItem[];
  artist = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qfrService: QfrService) { }

  getEpisodes(): void {
    this.qfrService.getEpisodesByCovers(this.artist)
    .subscribe(episodes => this.episodes = episodes);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.artist = params.get('artist');
      this.getEpisodes();
    });
  }

}
