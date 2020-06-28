import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayboardComponent } from './playboard/playboard.component';
import { OriginalsPanelComponent } from './originals-panel/originals-panel.component';
import { LatestEpisodeComponent } from './latest-episode/latest-episode.component';
import { EpisodesByOriginalsComponent } from './episodes-by-originals/episodes-by-originals.component';
import { CoversPanelComponent } from './covers-panel/covers-panel.component';
import { EpisodesByCoversComponent } from './episodes-by-covers/episodes-by-covers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QfrNavbarComponent } from './qfr-navbar/qfr-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PlayboardComponent,
    OriginalsPanelComponent,
    LatestEpisodeComponent,
    EpisodesByOriginalsComponent,
    CoversPanelComponent,
    EpisodesByCoversComponent,
    QfrNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
