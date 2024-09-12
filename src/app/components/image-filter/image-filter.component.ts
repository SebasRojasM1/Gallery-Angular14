import { Component } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-filter',
  templateUrl: './image-filter.component.html',
  styleUrls: ['./image-filter.component.scss']
})
export class ImageFilterComponent {
  imagePath: string = 'assets/img/Icon.png';

  constructor(private imageService: ImageService) {}

  selectCategory(event: Event): void {
    const target = event.target as HTMLSelectElement; // HTMLSelectElement ayuda a la conversión de tipo.
    const category = target.value; 
    this.imageService.setCategory(category);
  }
}
