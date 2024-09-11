import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  images: Image[] = [];
  isModalVisible = false; // Controla la visibilidad del modal
  selectedImage: Image | null = null; // Almacena la imagen seleccionada para mostrar en el modal

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.updateImages();
  }

  ngDoCheck(): void {
    const currentCategory = this.imageService.getCategory();
    this.images = this.imageService.getImagesByCategory();
  }

  updateImages(): void {
    this.images = this.imageService.getImagesByCategory();
  }

  toggleFavorite(image: Image) {
    const newFavoriteStatus = !image.favorite; // Cambiar el estado de favorito
    this.imageService.updateFavorite(image.id, newFavoriteStatus); // Actualizar en el servicio
    image.favorite = newFavoriteStatus; // Reflejar el cambio en el componente
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
