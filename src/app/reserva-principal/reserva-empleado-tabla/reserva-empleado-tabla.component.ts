import { Component, Input } from '@angular/core';
import { ReservaEmpleadoDetalle } from '../../models/reserva-empleado-detalle';

@Component({
  selector: 'app-reserva-empleado-tabla',
  //standalone: true,
  //imports: [],
  templateUrl: './reserva-empleado-tabla.component.html',
  styleUrl: './reserva-empleado-tabla.component.css'
})
export class ReservaEmpleadoTablaComponent {
  @Input() reservasEmpleado: ReservaEmpleadoDetalle[] = []
}
