import { Component } from '@angular/core';
import { Image } from './models/image.model';
import { ImageService } from './services/image.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'gallery';
  images: Image[] = [];
  filteredImages: Image[] = [];
  favoriteImages: Image[] = [];
  currentRoute: string = '';


  constructor(private imageService: ImageService, private router: Router) {
    this.images = this.imageService.getImages();
    this.filteredImages = this.images; // Inicialmente mostramos todas las imágenes
    this.updateFavorites();
  }

  ngOnInit(): void {
    this.currentRoute = this.router.url;

    // Suscríbete a los eventos de navegación para actualizar la ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
      }
    });
  }

  onCategorySelected(category: string): void {
    if (category === 'All Categories') {
      this.filteredImages = this.images;
    } else if (category === 'Favorites') {
      this.filteredImages = this.imageService.getFavoriteImages();
    } else {
      this.filteredImages = this.images.filter(image => image.category === category);
    }
  }

  toggleFavorite(image: Image): void {
    const newFavoriteStatus = !image.favorite;
    this.imageService.updateFavorite(image.id, newFavoriteStatus);
    image.favorite = newFavoriteStatus;
    this.updateFavorites(); // Actualizar la lista de favoritos después de cambiar
  }

  updateFavorites(): void {
    this.favoriteImages = this.imageService.getFavoriteImages();
  }
}