import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-favorite-images',
  templateUrl: './favorite-images.component.html',
  styleUrls: ['./favorite-images.component.scss']
})
export class FavoriteImagesComponent implements OnInit {
  favoriteImages: Image[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.getFavoriteImages();
  }

  getFavoriteImages(): void {
    this.favoriteImages = this.imageService.getFavoriteImages(); // Obtener las imágenes favoritas del servicio
  }
}
