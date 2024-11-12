import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservaEmpleadoDetalle } from '../../models/reserva-empleado-detalle';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-reserva-empleado-detalle',
  templateUrl: './reserva-empleado-detalle.component.html',
  styleUrl: './reserva-empleado-detalle.component.css'
})
export class ReservaEmpleadoDetalleComponent  implements OnInit {
  reservasEmpleado: ReservaEmpleadoDetalle[] = []

  constructor(
    private  activedRoute: ActivatedRoute,
    private readonly reservaService: ReservaService
  ){}

  listar(){
    this.reservaService.obtenerReservasEmpleado(1).subscribe((rest: any) => {
      this.reservasEmpleado = rest
      console.log(this.reservasEmpleado)
    })
   }


  ngOnInit(): void {

    this.listar()

    /*
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
*/
  }
}
