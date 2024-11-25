import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  //standalone: true,
  //imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public username: string | null = null;

  ngOnInit(): void {
    this.username = localStorage.getItem("userName");
  }
}
