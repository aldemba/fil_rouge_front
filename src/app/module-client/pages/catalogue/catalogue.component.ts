import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from 'src/app/shared/catalogue.service';
import { CatalogueAl } from 'src/app/shared/models/catalogue';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
 produit:any
  // produits$:Observable<any>|null=null
  catalogue: CatalogueAl|undefined

  constructor(private monServ:CatalogueService) {
   }

  ngOnInit(): void {
    // this.produits$=this.service.all()
    this.monServ.all().subscribe((data)=>this.produit=data.produit)
  }
  clickchanged(type:string){
    switch (type) {
      case "burger":
    this.monServ.all().subscribe((data)=>this.produit=data.burger)
        
        break;
        case "menu":
        this.monServ.all().subscribe((data)=>this.produit=data.menu)
      
          break;
    
      default:
        this.monServ.all().subscribe((data)=>this.produit=data.produit)

        break;
    }
  }
}
