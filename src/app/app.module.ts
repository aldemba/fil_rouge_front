import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './module-client/pages/catalogue/catalogue.component';
import { LayoutModule } from './module-client/layout/layout.module';
import { NotFoundComponent } from './module-client/not-found/not-found.component';
import { ModuleClientModule } from './module-client/module-client.module';
import { HomeComponent } from './module-client/pages/home/home.component';
import { CatalogueService } from './shared/catalogue.service';


const appRoutes:Routes = [
{path:'catalogue', component: CatalogueComponent},
{ path: 'error', component: NotFoundComponent },
{ path: '', redirectTo: '/catalogue', pathMatch: 'full' },
{ path: '**', redirectTo: '/error' }

]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ModuleClientModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CatalogueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
