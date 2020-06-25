import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayboardComponent } from './playboard/playboard.component';
import { OriginalsPanelComponent } from './originals-panel/originals-panel.component';
import { LatestEpisodeComponent } from './latest-episode/latest-episode.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayboardComponent,
    OriginalsPanelComponent,
    LatestEpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
