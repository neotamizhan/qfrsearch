import { Component, OnInit } from '@angular/core';
import { QfrService } from '../qfr.service';
import { MatChip } from '@angular/material';

@Component({
  selector: 'app-covers-panel',
  templateUrl: './covers-panel.component.html',
  styleUrls: ['./covers-panel.component.scss']
})

export class CoversPanelComponent implements OnInit {

  covers = [];

  constructor(private qfrService: QfrService) { }

  ngOnInit() {
    this.qfrService.getCoverArtists()
    .subscribe(o => this.covers = o);
    console.log(this.covers);
  }
}
