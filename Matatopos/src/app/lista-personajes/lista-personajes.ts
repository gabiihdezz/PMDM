import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichaPersonaje, Personaje } from '../ficha-personaje/ficha-personaje';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [CommonModule, FichaPersonaje],
  templateUrl: './lista-personajes.html',
  styleUrls: ['./lista-personajes.css']
})
export class ListaPersonajes implements OnInit {

  modoHalloween: boolean = false;

   personajes: Personaje[] = [];
  personajesHalloween: Personaje[] = [];

  ngOnInit(): void {
    this.personajes = [
      { nombre: "Leo Messi", raza: "Dios", media: 99, foto:"/cabra.webp" },
      { nombre: "Cristiano Ronaldo", raza: "Bicho", media: 98, foto:"/bicho.jpg"},
      { nombre: "Jordy Caicedo", raza: "Muerto", media: 1 , foto:"/toro.jpg"},
      { nombre: "Cole Palmer", raza: "Palmera", media: 95 , foto:"/palmera.jpg"},
      { nombre: "Neymar", raza: "Humano", media: 97 , foto:"/neymar.jpg"}
    ];
      this.personajesHalloween = [
      { nombre: "Conde Drácula", raza: "🧛‍♂️", media: 0, foto:"/halloween/dracula.jpg" },
      { nombre: "Frankenstein", raza: "🧟‍♂️", media: 0, foto:"/halloween/Frankenstein.jpg" },
      { nombre: "Bruja", raza: "🧛‍♂️", media: 0, foto:"/halloween/bruja.jpg" },
      { nombre: "Michael Myers", raza: "🔪", media: 0, foto:"/halloween/MichaelMyers.webp" },
      { nombre: "Pennywhise", raza: "🤡", media: 0, foto:"/halloween/it.jpg" },
    ];
 
    const stored = localStorage.getItem('modoHalloween');
    this.modoHalloween = stored === 'true';
 
  }

  trackByNombre(index: number, item: Personaje): string {
    return item.nombre;
  }
}
