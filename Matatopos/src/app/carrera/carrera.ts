import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Participante {
  nombre: string;
  foto: string;
}

@Component({
  selector: 'app-carrera',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrera.html',
  styleUrls: ['./carrera.css'] 
})
export class Carrera implements OnInit {
  modoHalloween: boolean = false;

  movChibi1 = { transform: 'translate(0px, 0px)' };
  posX: number = 0;
  posY: number = 0;

  carrera: Participante[] = [];

  ngOnInit(): void {
    this.carrera = [
      { nombre: "Anubis", foto: "/images/anubis1.png" },
      { nombre: "Old Guy", foto: "/images/old_guy1.png" },
      { nombre: "Hell Knight", foto: "/images/hell-knight1.png" },
      { nombre: "Pirate", foto: "/images/pirate1.png" },
      { nombre: "Succubus", foto: "/images/succubus1.png" }
    ];
    const stored = localStorage.getItem('modoHalloween');
    this.modoHalloween = stored === 'true';
  }

  async moverse() {
    this.posX += Math.floor(Math.random() * 50) - 25;
    this.posY += Math.floor(Math.random() * 50) - 25;

    this.movChibi1 = {
      transform: `translate(${this.posX}px, ${this.posY}px)`
    };
  }

  trackByNombre(index: number, item: Participante): string {
    return item.nombre;
  }
}
