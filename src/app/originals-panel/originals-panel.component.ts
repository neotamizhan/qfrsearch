import { Component, OnInit } from '@angular/core';
import { QfrService } from '../qfr.service';

@Component({
  selector: 'app-originals-panel',
  templateUrl: './originals-panel.component.html',
  styleUrls: ['./originals-panel.component.scss']
})

export class OriginalsPanelComponent implements OnInit {

  originals = [];

  constructor(private qfrService: QfrService) { }

  ngOnInit() {
    this.qfrService.getOriginalArtists()
    .subscribe(o => this.originals = o);
    console.log(this.originals);
  }
}
