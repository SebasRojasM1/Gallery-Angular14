import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { FavoriteImagesComponent } from './components/favorite-images/favorite-images.component';
import { ImageFilterComponent } from './components/image-filter/image-filter.component';
import { ImageService } from './services/image.service';
import { CommonModule } from '@angular/common';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    FavoriteImagesComponent,
    ImageFilterComponent,
    ImageDetailsComponent,
    FavoritePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
