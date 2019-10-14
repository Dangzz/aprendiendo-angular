import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  public titulo: string;
  public comnetario: string;
  public year: number;

  constructor() {
    this.titulo = 'Hola Mundo';
    console.log(this.titulo);
  }

  ngOnInit() {
  }

}
