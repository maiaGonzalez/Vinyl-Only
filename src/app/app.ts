import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { DiscosList } from './discos-list/discos-list';
import { FormsModule } from '@angular/forms';
import { VinylCarrito } from './vinyl-carrito/vinyl-carrito';
import { VinylDiscos } from './vinyl-discos/vinyl-discos';
import { VinylOnlyAbout } from './vinyl-only-about/vinyl-only-about';
import { InputInteger } from './input-integer/input-integer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DiscosList, FormsModule, VinylCarrito, VinylDiscos, VinylOnlyAbout, RouterModule, InputInteger],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'VinylOnly';
}
