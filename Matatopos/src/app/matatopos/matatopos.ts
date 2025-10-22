import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-matatopos',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class Matatopos {
  puntos=0;
  numero = Math.floor(Math.random() * 9) + 1;

  userClick(casilla: number) {
    if (casilla === this.numero) {
      this.puntos++;
      this.numero = Math.floor(Math.random() * 9) + 1;
    } else {
      this.puntos = 0;
    }
  }
}
