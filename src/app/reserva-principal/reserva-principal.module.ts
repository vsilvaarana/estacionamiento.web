import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaPrincipalComponent } from './reserva-principal.component';
import { ReservaEmpleadoDetalleComponent } from './reserva-empleado-detalle/reserva-empleado-detalle.component';
import { ReservaRoutingModule } from './reserva-routing.module';
import { FormsModule } from '@angular/forms';
import { ReservaEmpleadoTablaComponent } from './reserva-empleado-tabla/reserva-empleado-tabla.component';

@NgModule({
  declarations: [
    ReservaPrincipalComponent,
    ReservaEmpleadoDetalleComponent,
    ReservaEmpleadoTablaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    FormsModule
  ],
  providers: []
})
export class ReservaPrincipalModule { }
