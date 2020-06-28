import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestEpisodeComponent } from './latest-episode/latest-episode.component';
import { EpisodesByOriginalsComponent } from './episodes-by-originals/episodes-by-originals.component';
import { EpisodesByCoversComponent } from './episodes-by-covers/episodes-by-covers.component';
import { PlayboardComponent } from './playboard/playboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'latest',  pathMatch: 'full'},
  { path: 'latest', component: LatestEpisodeComponent },
  { path: 'all', component: PlayboardComponent },
  { path: 'originals/:artist', component: EpisodesByOriginalsComponent },
  { path: 'covers/:artist', component: EpisodesByCoversComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
