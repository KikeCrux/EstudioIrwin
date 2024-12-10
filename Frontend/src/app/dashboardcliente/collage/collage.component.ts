import { Component, ViewChild, ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';
import interact from 'interactjs';

@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.css']
})
export class CollageComponent {

  images: { src: string, x: number, y: number, width: number, height: number }[] = [];

  @ViewChild('captureElement') captureElement: ElementRef | undefined;
  ngOnInit() {
    this.initializeInteractJs();
  }

  ngOnDestroy() {
    // Limpiar interact.js cuando se destruye el componente
    interact('.collage-item').unset();
  }

   onFileChange(event: any) {
    const files = event.target.files;
    for (let file of files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.onload = () => {
          // Una vez que la imagen esté cargada, obtenemos el ancho y alto
          this.images.push({
            src: e.target.result,
            x: 0,
            y: 0,
            width: img.width - (img.width * 0.20),
            height: img.height - (img.height * 0.20)
          });
        };
        img.src = e.target.result
      };
      reader.readAsDataURL(file);
    }
  }

  // Función para inicializar Interact.js
  initializeInteractJs() {
    interact('.collage-item')
      .draggable({
        // Activar el arrastre
        onstart(event) { /* Funcionalidad cuando empieza el arrastre */ },
        onmove(event) {
          // Mover el elemento durante el drag
          let target = event.target;
          target.style.left = `${parseFloat(target.style.left || '0') + event.dx}px`;
          target.style.top = `${parseFloat(target.style.top || '0') + event.dy}px`;
        },
        onend(event) { /* Funcionalidad cuando termina el arrastre */ }
      })
      .resizable({
        // Habilitar el redimensionado
        edges: { top: true, left: true, bottom: true, right: true },
        onstart(event) { /* Funcionalidad cuando empieza el redimencionamiento */ },
        onmove(event) {
          let target = event.target;
          let width = event.rect.width;
          let height = event.rect.height;

          // Ajustar el tamaño
          target.style.width = `${width}px`;
          target.style.height = `${height}px`;
        },
        onend(event) { /* Funcionalidad cuando termina el redimencionamiento */ }
      });
  }

  // Función para guardar el collage como imagen
  saveCollage() {
    html2canvas(this.captureElement?.nativeElement!).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'collage.jpg';
      link.click();
    });
  }

    // Esta función se ejecutará cada vez que una imagen se haya cargado
  onImageLoad() {
    console.log('La imagen se ha cargado correctamente');
      // Aquí puedes realizar alguna acción, como ajustar el tamaño de la imagen o realizar una validación
  }

  removeImage(index: number): void {
    this.images.splice(index, 1);  // Elimina 1 elemento en la posición indicada por el índice
  }


}
