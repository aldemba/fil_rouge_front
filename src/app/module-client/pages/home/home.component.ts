import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produits } from '../../../shared/models/produits';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() produitcle:Produits[]|undefined=[]

  constructor() {
   }

  ngOnInit(): void {
   
  }

}
