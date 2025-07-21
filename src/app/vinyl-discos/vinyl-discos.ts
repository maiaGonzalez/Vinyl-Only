import { Component } from '@angular/core';
import { VinylCarrito } from '../vinyl-carrito/vinyl-carrito';
import { DiscosList } from '../discos-list/discos-list';
@Component({
  selector: 'app-vinyl-discos',
  imports: [VinylCarrito, DiscosList],
  templateUrl: './vinyl-discos.html',
  styleUrl: './vinyl-discos.scss'
})
export class VinylDiscos {

}
