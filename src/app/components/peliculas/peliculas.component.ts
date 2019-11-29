import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula.model';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

  public peliculas: Pelicula[];
  public favorita: Pelicula;

  constructor(private _peliculaService: PeliculaService) {
    this.getMovies();
  }

  ngOnInit() {
    console.log(this._peliculaService.holaMundo());
  }


  getMovies() {
    this.peliculas = this._peliculaService.getPeliculas();
  }

  mostrarFavorita(event) {
    this.favorita = event.pelicula;
  }

}
