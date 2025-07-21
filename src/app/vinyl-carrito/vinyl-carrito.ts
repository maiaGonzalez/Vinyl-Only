import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoCart } from '../disco-cart';
import { Disco } from '../discos-list/Disco';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-vinyl-carrito',
  imports: [CommonModule],
  templateUrl: './vinyl-carrito.html',
  styleUrl: './vinyl-carrito.scss'
})
export class VinylCarrito implements OnInit 
{
  
  cartList$:Observable<Disco[]>;

  constructor(private cart : DiscoCart){
    this.cartList$ = cart.cartList$;
  }

  removeToCart(disco : Disco) : void{
   this.cart.removeToCart(disco);
  }

  ngOnInit(): void {
    
  }

}
