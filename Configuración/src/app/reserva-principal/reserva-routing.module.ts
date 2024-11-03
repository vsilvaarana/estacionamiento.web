import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaPrincipalComponent } from './reserva-principal.component';
import { RouterModule, Routes } from '@angular/router';
import { ReservaEmpleadoDetalleComponent } from './reserva-empleado-detalle/reserva-empleado-detalle.component';

const routes: Routes = [
  {
    path:'',
    component: ReservaPrincipalComponent,
    children: [
      {
        path: '',
        redirectTo: 'reservaprincipal',
        pathMatch: 'full'
      },      
      {
        path: 'reservaempleadodetalle/:id',
        component: ReservaEmpleadoDetalleComponent
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
