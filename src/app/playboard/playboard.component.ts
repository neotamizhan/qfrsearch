import { Component, OnInit } from '@angular/core';
import { QfrItem } from '../qfrItem';
import { QfrService } from '../qfr.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-playboard',
  templateUrl: './playboard.component.html',
  styleUrls: ['./playboard.component.scss']
})
export class PlayboardComponent implements OnInit {
  episodes: QfrItem[];

  constructor(
    public qfrService: QfrService,
    private sanitizer: DomSanitizer
    ) { }

  cleanURL(oldURL: string ): SafeUrl {
    return   this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }

  getEpisodes(): void {
    this.qfrService.getAllEpisodes()
    .subscribe(e => this.episodes = e);
  }

  ngOnInit() {
    this.getEpisodes();
    console.log(this.episodes);
  }
}


