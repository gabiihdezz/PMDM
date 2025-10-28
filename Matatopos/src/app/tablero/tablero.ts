import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CdkDropList, CdkDrag],
  templateUrl: './tablero.html',
  styleUrls: ['./tablero.css']
})
export class Tablero implements OnInit {
  formulario: FormGroup;
  todo: string[] = [];
  doing: string[] = [];
  done: string[] = [];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      tarea: ['', [Validators.required]],
    });
  }

  modoHalloween: boolean = false;

  ngOnInit() {
    this.cargarTareas();
    const stored = localStorage.getItem('modoHalloween');
    this.modoHalloween = stored === 'true';

  }

  onSubmit() {
    if (this.formulario.valid) {
      const tarea = this.formulario.value.tarea.trim();
      if (tarea) {
        this.todo.push(tarea);
        this.guardarTareas();
      }
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  eliminarTarea(lista: 'todo' | 'doing' | 'done', index: number) {
    this[lista].splice(index, 1);
    this.guardarTareas();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.guardarTareas();
  }

  guardarTareas() {
    const data = {
      todo: this.todo,
      doing: this.doing,
      done: this.done
    };
    localStorage.setItem('kanbanData', JSON.stringify(data));
  }

  cargarTareas() {
    const saved = localStorage.getItem('kanbanData');
    if (saved) {
      const data = JSON.parse(saved);
      this.todo = data.todo || [];
      this.doing = data.doing || [];
      this.done = data.done || [];
    }
  }
}
