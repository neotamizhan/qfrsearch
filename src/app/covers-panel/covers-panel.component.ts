import { Component, OnInit } from '@angular/core';
import { QfrService } from '../qfr.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-covers-panel',
  templateUrl: './covers-panel.component.html',
  styleUrls: ['./covers-panel.component.scss']
})

export class CoversPanelComponent implements OnInit {

  covers = [];

  constructor(
    private qfrService: QfrService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.qfrService.getCoverArtists()
    .subscribe(o => this.covers = o);
    console.log(this.covers);
  }

  cleanURL(oldURL ): SafeUrl {
    return   this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }
}
