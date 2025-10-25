import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador implements OnInit {
  modoHalloween: boolean = false;

  ngOnInit() {
    const stored = localStorage.getItem('modoHalloween');
    this.modoHalloween = stored === 'true';
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
