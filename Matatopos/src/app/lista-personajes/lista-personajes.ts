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
  modoNavidad: boolean = false;

   personajes: Personaje[] = [];
  personajesHalloween: Personaje[] = [];
  personajesNavidad: Personaje[] = [];

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
      this.personajesNavidad = [
      { nombre: "Rey Melchor", raza: "🤴🏻", media: 99, foto:"/navidad/RM.jpg" },
      { nombre: "Rey Gaspar", raza: "🤴🏽", media: 99, foto:"/navidad/RG.jpg" },
      { nombre: "Rey Baltasar", raza: "🎅", media: 99, foto:"/navidad/RB.jpg" },
      { nombre: "Papa Noel", raza: "🎅", media: 99, foto:"/navidad/papanoel.jpg" },
      { nombre: "Camello", raza: "🐫", media: 99, foto:"/navidad/camello.jpg" },
    ];
 
    const storedH = localStorage.getItem('modoHalloween');
    const storedN = localStorage.getItem('modoNavidad');
    this.modoHalloween = storedH === 'true';
    this.modoNavidad = storedN === 'true';
 
  }

  trackByNombre(index: number, item: Personaje): string {
    return item.nombre;
  }
}
