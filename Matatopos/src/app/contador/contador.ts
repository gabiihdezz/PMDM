import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { StorageService } from '../services/local-storage';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador.html',
styleUrls: ['./contador.css']
})
export class Contador implements OnInit {
  modoHalloween: boolean = false;
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

  numero:number = 5;

  incrementar(){
    if (this.numero<5)
    this.numero++;
    else
      this.numero=5;  
  }

  decrementar(){
   if (this.numero>0)
    this.numero--;
    else
      this.numero=0;  
  }

  resetear(){
    this.numero=5;
  }

}
