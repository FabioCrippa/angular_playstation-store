import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { HomeComponent } from "./pages/home/home.component";
import { CardLabelComponent } from "./components/card/card-label/card-label.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent, HomeComponent, CardLabelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
}
