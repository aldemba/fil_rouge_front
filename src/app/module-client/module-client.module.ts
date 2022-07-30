import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClientRoutingModule } from './client-routing.module';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './pages/home/home.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DetailsComponent } from './pages/details/details.component';



@NgModule({
  declarations: [
    CatalogueComponent,
    DetailsComponent,
    HomeComponent,
    CardComponent


  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule
  ],
  exports: [
  ]
})
export class ModuleClientModule { }
