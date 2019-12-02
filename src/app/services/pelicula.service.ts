import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';

@Injectable() export class PeliculaService {

    public peliculas: Pelicula[];

    constructor() {
        this.peliculas = [
            new Pelicula('Spiderman 1', 2019, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHQvqILPtAOdGe224vyidiP4gJh6Kkv6hoF8ZC5Vq68gGxgQPe'),
            new Pelicula('Star Wars', 2018, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCzXfErYlW_Af1vTVil5IGAjCcSlGwf79cSjt2FMXQyf0Rpzto'),
            new Pelicula('Avengers', 2015, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ60i8ZIoMh38deQlfU0J19W-5GIzFYKC-vkDCEyvz34f0YEF2M'),
            new Pelicula('Back to the future', 2010, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPUQ0DZ_4y4GlK1fzKeOMzPeAed8IgJakKjchbZb4ngkRNihL1'),
            new Pelicula('Lion King', 2016, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJwrrD3K1_oKzR9MYSvgFVs4RHBFrmWELvsC9RILag22QpIi9y')
        ];
    }

    holaMundo() {
        return 'Hola mundo desde servicio Angular';
    }

    getPeliculas() {
        return this.peliculas;
    }
}