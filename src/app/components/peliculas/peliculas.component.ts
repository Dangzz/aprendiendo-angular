import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: Array<any>;

  constructor() {
    this.getMovies();
  }

  ngOnInit() {
  }


  getMovies() {
    this.peliculas = [
      { titulo: 'Spiderman 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHQvqILPtAOdGe224vyidiP4gJh6Kkv6hoF8ZC5Vq68gGxgQPe' },
      { titulo: 'Star Wars', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCzXfErYlW_Af1vTVil5IGAjCcSlGwf79cSjt2FMXQyf0Rpzto' },
      { titulo: 'Avengers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ60i8ZIoMh38deQlfU0J19W-5GIzFYKC-vkDCEyvz34f0YEF2M' },
      { titulo: 'Back to the future', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPUQ0DZ_4y4GlK1fzKeOMzPeAed8IgJakKjchbZb4ngkRNihL1' },
      { titulo: 'Godzilla', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3YrHdrz4MTf2DcfRGatnQnGfxUz1JMG7PPX-THy-hc5PkKP7Q' },
      { titulo: 'Lion King', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJwrrD3K1_oKzR9MYSvgFVs4RHBFrmWELvsC9RILag22QpIi9y' }
    ];
  }

}
