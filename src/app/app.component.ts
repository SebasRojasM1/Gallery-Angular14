import { Component } from '@angular/core';
import { Image } from './models/image.model';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'gallery';
  images: Image[] = [];
  filteredImages: Image[] = [];

  constructor(private imageService: ImageService) {
    this.images = this.imageService.getImages();
    this.filteredImages = this.images; // Inicialmente mostramos todas las imágenes
  }

  onCategorySelected(category: string): void {
    if (category === 'All Categories') {
      this.filteredImages = this.images;
    } else if (category === 'Favorites') {
      this.filteredImages = this.images.filter(image => image.favorite);
    } else {
      this.filteredImages = this.images.filter(image => image.category === category);
    }
  }

  toggleFavorite(image: Image): void {
    const newFavoriteStatus = !image.favorite;
    this.imageService.updateFavorite(image.id, newFavoriteStatus);
    image.favorite = newFavoriteStatus;
  }
}