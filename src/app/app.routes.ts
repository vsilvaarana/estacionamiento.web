import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { Reserva_RapidaComponent } from './pages/reserva-rapida/reserva-rapida.component';
import { NuevaReservaComponent } from './pages/nueva-reserva/nueva-reserva.component';
import { RegisterComponent } from './pages/register/register.component';
import { EspaciosComponent } from './pages/espacios/espacios.component';


export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "reserva_rapida", component: Reserva_RapidaComponent},
    {path: "home", component: HomeComponent},
    {path: "espacios", component: EspaciosComponent},
    {path: "nueva_reserva", component: NuevaReservaComponent},
    {path: "register", component: RegisterComponent},
    {path: "", redirectTo: "login", pathMatch: "full"},
    {
        path: "reservaprincipal",
        loadChildren: ()=>import('./reserva-principal/reserva-principal.module').then(m=>m.ReservaPrincipalModule)
    }
];
