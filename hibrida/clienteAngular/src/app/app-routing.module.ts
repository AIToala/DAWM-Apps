import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { FotoComponent } from './foto/foto.component';

const routes: Routes = [
  { path: 'foto', component: FotoComponent },
  { path: 'album', component: AlbumComponent },
  { path: "**", redirectTo: "album" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
