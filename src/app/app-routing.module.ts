import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosComponent }      from './productos/productos.component';
import { PrincipalComponent }      from './principal/principal.component';
import { DetalleComponent }      from './detalle/detalle.component';
const routes: Routes = [
  { path: 'productos', component: ProductosComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'detalle', component: DetalleComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

/*@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})*/
export class AppRoutingModule { }
