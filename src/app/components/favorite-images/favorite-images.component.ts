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
  isModalVisible = false; // Controla la visibilidad del modal
  selectedImage: Image | null = null; // Almacena la imagen seleccionada para mostrar en el modal

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.getFavoriteImages();
  }

  getFavoriteImages(): void {
    this.favoriteImages = this.imageService.getFavoriteImages(); // Obtener las imágenes favoritas del servicio
  }

  openModal(image: Image) {
    this.selectedImage = image; // Setea la imagen seleccionada
    this.isModalVisible = true; // Muestra el modal
  }

  closeModal() {
    this.isModalVisible = false; // Oculta el modal
    this.selectedImage = null; // Limpia la imagen seleccionada
  }
}
