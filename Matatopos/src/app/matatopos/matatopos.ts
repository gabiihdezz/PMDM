import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../services/local-storage';

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
  auxNumero = this.numero;
  fallo=false;
  
  userClick(casilla: number) {
    if (casilla === this.numero) {
      this.puntos++;
      this.numero = Math.floor(Math.random() * 9) + 1;
      this.fallo=false;
      let nuevoNumero;
      do{
          nuevoNumero = Math.floor(Math.random() * 9) + 1;
      }while(nuevoNumero===this.auxNumero);
      
      this.numero = nuevoNumero;
      this.auxNumero = this.numero; 
    } else {
      this.puntos = 0;
      casilla = 0;
      this.fallo=true;
    }
  }
     modoNavidad: boolean = false;
   
     constructor(private storage: StorageService) {}
   
   ngOnInit() {
     this.modoHalloween = this.storage.getItem('modoHalloween') === 'true';
     this.modoNavidad = this.storage.getItem('modoNavidad') === 'true';
   }
   
   guardarModos() {
     this.storage.setItem('modoHalloween', this.modoHalloween.toString());
     this.storage.setItem('modoNavidad', this.modoNavidad.toString());
   }
   

}
