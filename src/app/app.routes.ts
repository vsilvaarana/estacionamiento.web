import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "home", component: HomeComponent},
    
=======
import { Reserva_RapidaComponent } from './pages/reserva-rapida/reserva-rapida.component';


export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "reserva_rapida", component: Reserva_RapidaComponent},
    {path: "home", component: HomeComponent},
>>>>>>> c44a5cfba26ca8252fae4f81df052a70d5d666a4
    {path: "", redirectTo: "login", pathMatch: "full"}
];
