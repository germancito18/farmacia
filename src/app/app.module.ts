import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ProductosComponent } from './productos/productos.component';
import { AppRoutingModule } from './/app-routing.module';
import { DetalleService } from './detalle.service';
import { ProductosService } from './productos.service';
import { PrincipalService } from './principal.service';




@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DetalleComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DetalleService,
              PrincipalService,
              ProductosService],
              
  bootstrap: [AppComponent]
})
export class AppModule { }


