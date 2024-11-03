import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservaEmpleadoDetalle } from '../../models/reserva-empleado-detalle';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-reserva-empleado-detalle',
  //standalone: true,
  //imports: [],
  templateUrl: './reserva-empleado-detalle.component.html',
  styleUrl: './reserva-empleado-detalle.component.css'
})
export class ReservaEmpleadoDetalleComponent  implements OnInit {
  reservasEmpleado: ReservaEmpleadoDetalle[] = []

  constructor(
    private  activedRoute: ActivatedRoute,
    private reservaService: ReservaService
  ){

  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      params=>{
        console.log(params["id"])
        this.reservaService.obtenerReservasEmpleado(params["id"]).subscribe(
          result=>{
            this.reservasEmpleado = result
          }
        )
      }
    )
    //linea de codigo
  }
}
