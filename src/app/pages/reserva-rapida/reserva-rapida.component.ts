import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { EstacionamientoService } from '../../services/estacionamiento.service';
import { EstacionamientoModel } from '../../models/estacionamiento-model';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../../models/usuario-model';
import { DatePipe } from '@angular/common';
import { ReservaModel } from '../../models/reserva-model';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-reserva-rapida',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './reserva-rapida.component.html',
  styleUrl: './reserva-rapida.component.css'
})
export class Reserva_RapidaComponent implements OnInit{
  datepipe: DatePipe = new DatePipe('en-US')
  fecha_actual = this.datepipe.transform(new Date(),'yyyy-MM-dd')
  
  estacionamientoModel: EstacionamientoModel = {
    estacionamientoId: 0,
    piso: '',
    espacio: '',
    tipo: 0, 
    estado: 0
  };

  usuarioModel: UsuarioModel = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    correo: '',
    password: '',
    marca: '',
    placa: ''
  };

  reserva: ReservaModel = {
    estacionamientoId: 0,
    piso: '',
    espacio: '',
    tipo: 0,
    estado: 0,
    usuarioId: 0,
    placa: ''
  };

  constructor(
    private router: Router,
    private estacionamientoService: EstacionamientoService,
    private usuarioService: UsuarioService,
    private reservaService: ReservaService,
    private activateRoute: ActivatedRoute
  ){}
  
  ngOnInit(): void {
      this.estacionamientoService.buscarEstacionamientoLibre().subscribe({
        next: (estacionamiento :any) => {
          this.estacionamientoModel = estacionamiento
        }
      })

      this.usuarioService.obtenerUsuarioPorId(1).subscribe({
        next:(usuario : any) => {
          this.usuarioModel = usuario
        }
      })
  }

  reservar(){
    
    this.reserva = {
      usuarioId: this.usuarioModel.usuarioId,
      placa: this.usuarioModel.placa,
      estacionamientoId: this.estacionamientoModel.estacionamientoId,
      tipo:0,
      estado:1,
      piso: '',
      espacio: '',
      fecha: this.fecha_actual
    }

    //this.usuarioService.registrar(this.usuarioModel).subscribe((rest: any)=>{
    //  this.usuarioId = rest
    //  alert("Se registro correctamente " + this.usuarioId);
    //  this.router.navigate(["/login"]); // Redirige al login
    //}

    this.reservaService.registrar(this.reserva).subscribe((rest: any) => {
      alert("Reserva rapida realizada")
      //reservaempleadodetalle/1
      this.router.navigate(["/reservaprincipal/reservaempleadodetalle/1"])     
    })
    
    }
}
