import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-galeria',
  templateUrl: './detalle-galeria.component.html',
  styleUrls: ['./detalle-galeria.component.css']
})
export class DetalleGaleriaComponent {
  // Lista de imágenes del carrusel
  imagenesCarrusel: string[] = [
    '../../../assets/img-detalle/2.jpg',
    '../../../assets/img-detalle/3.jpg',
    '../../../assets/img-detalle/4.jpg',
    '../../../assets/img-detalle/5.jpg'
  ];

  // Imagen principal inicial
  imagenPrincipal: string = this.imagenesCarrusel[0];

  // Función que actualiza la imagen principal
  actualizarImagenPrincipal(index: number): void {
    this.imagenPrincipal = this.imagenesCarrusel[index];
  }
}
