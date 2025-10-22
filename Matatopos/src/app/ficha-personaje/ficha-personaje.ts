import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Personaje {
  nombre: string;
  raza: string;
  media: number;
  foto: string;
}

@Component({
  selector: 'app-ficha-personaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ficha-personaje.html',
  styleUrls: ['./ficha-personaje.css']
})
export class FichaPersonaje {
  @Input() personaje!: Personaje;

  getEstrellas(): string {
    const estrellas = Math.round(this.personaje.media / 20); // 0-100 → 0-5
    return '⭐'.repeat(estrellas);
  }
}
