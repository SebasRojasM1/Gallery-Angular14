// src/app/components/image-details/image-details.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})

export class ImageDetailsComponent {
  @Input() isVisible: boolean = false; // Recibe el estado de visibilidad desde el componente padre
  @Input() image: Image | null = null; // Recibe la imagen seleccionada desde el componente padre
  @Output() close = new EventEmitter<void>(); // Emite un evento para cerrar el modal

  closeModal() {
    this.close.emit(); // Emite el evento de cierre del modal
  }
}