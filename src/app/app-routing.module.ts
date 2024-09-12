import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';

const routes: Routes = [
  { path: '', component: ImageGalleryComponent }, // Ruta principal con la galería
  { path: 'favorites', component: FavoritePageComponent }, // Ruta de favoritos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
