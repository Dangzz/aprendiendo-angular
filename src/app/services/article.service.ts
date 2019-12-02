import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Global } from '../services/global';

 @Injectable()
 export class ArticleService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    pruebas(){
        return 'Hola soy el servicio'
    }

    getArticles(): Observable<any>{
        return this._http.get(this.url + 'articles')
    }

 }