import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { Reserva_RapidaComponent } from './pages/reserva-rapida/reserva-rapida.component';


export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "reserva_rapida", component: Reserva_RapidaComponent},
    {path: "home", component: HomeComponent},

    {path: "", redirectTo: "login", pathMatch: "full"}
];
