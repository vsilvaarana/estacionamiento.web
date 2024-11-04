import { Component } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [SharedModule],
  
})
export class HomeComponent { }
