import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matatopos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matatopos.html',
  styleUrls: ['./matatopos.css']
})
export class Matatopos implements OnInit {
  modoHalloween: boolean = false;
  puntos = 0;
  numero = Math.floor(Math.random() * 9) + 1;
  
  userClick(casilla: number) {
    if (casilla === this.numero) {
      this.puntos++;
      this.numero = Math.floor(Math.random() * 9) + 1;
    } else {
      this.puntos = 0;
    }
  }
    ngOnInit() {
    const stored = localStorage.getItem('modoHalloween');
    this.modoHalloween = stored === 'true';
  }

}
