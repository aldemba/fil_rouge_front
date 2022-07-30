import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {  CatalogueAl } from './models/catalogue';



@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
private al_url:string="http://localhost:3000/catalogues"
  constructor( private http:HttpClient) { }
  all():Observable<CatalogueAl>{
    return this.http.get<any>(this.al_url).pipe(
      map(data =>{
         let catalogue: CatalogueAl={
          menu:data['hydra:member'][0].menus,
          burger:data['hydra:member'][1].burgers,
          produit:[...data['hydra:member'][0].menus,...data['hydra:member'][1].burgers]
         }
          return catalogue
        
          
      }),
    )
  }
}
