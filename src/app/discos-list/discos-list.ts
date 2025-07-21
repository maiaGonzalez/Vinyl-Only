import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Disco} from './Disco';
import { FormsModule } from '@angular/forms';
import { InputInteger } from '../input-integer/input-integer';
import { DiscoCart } from '../disco-cart';

@Component({
  selector: 'app-discos-list',
  imports: [CommonModule,FormsModule, InputInteger],
  templateUrl: './discos-list.html',
  styleUrl: './discos-list.scss'
})
export class DiscosList implements OnInit {
  discos: Disco[] =[
  {
      "nombre" : "Miranda-Hotel Miranda!",
      "genero" :  "Pop",
      "precio" : 33.000,
      "stock" : 6,
      "image" : "assets/img/miranda.jpg",
      "oferta": false,
      "cantidad" :0,
  },
  {
      "nombre" : "Aphex Twin-Richard D. James",
      "genero" :  "Ambient, Electrónica",
      "precio" : 48.000,
      "stock" : 2,
      "image" : "assets/img/aphex.jpg",
      "oferta": false,
      "cantidad" :0,
  },
  {
      "nombre" : "Illya Kuryaki and The Valderramas-Versus",
      "genero" :  "Soul, Funk, Rap",
      "precio" : 37.000,
      "stock" : 6,
      "image" : "assets/img/illya.jpg",
      "oferta": false,
      "cantidad" :0,
  },{
      "nombre" : "Gustavo Cerati-Colores Santos",
      "genero" :  "Rock alt., Electrónica",
      "precio" : 44.000,
      "stock" : 5,
      "image" : "assets/img/coloresSantos.jpg",
      "oferta": false,
      "cantidad" :0,
  },
  {
      "nombre" : "Sade-Love Deluxe",
      "genero" :  "Soul",
      "precio" : 25.000,
      "stock" : 2,
      "image" : "assets/img/sade.jpg",
      "oferta": true,
      "cantidad" :0,
  },  {
      "nombre" : "Babasonicos-Miami",
      "genero" :  "Rock",
      "precio" : 23.000,
      "stock" : 7,
      "image" : "assets/img/miami.jpg",
      "oferta": true,
      "cantidad" :0,
  },
  {
      "nombre" : "The Rolling Stones-Tattoo You",
      "genero" :  "Rock",
      "precio" : 43.000,
      "stock" : 8,
      "image" : "assets/img/tattooYou.jpg",
      "oferta": false,
      "cantidad" :0,
  },{
      "nombre" : "Linkin Park-Meteora",
      "genero" :  "Rock",
      "precio" : 30.000,
      "stock" : 2,
      "image" : "assets/img/meteora.jpg",
      "oferta": true,
      "cantidad" :0,
  },
  {
      "nombre" : "Vinocio-Horizonte",
      "genero" :  "Jazz, R&B, Hip-Hop",
      "precio" : 35.500,
      "stock" : 5,
      "image" : "assets/img/horizonte.jpg",
      "oferta": false,
      "cantidad" :0,
  },

]
  constructor(private cart :DiscoCart){
    
  }
  ngOnInit(): void {
    
  }

  maxStock(m: String){
     alert(m);
  }

  addToCart(disco : Disco) : void{
  
   this.cart.addToCart(disco);
   disco.stock -= disco.cantidad;
   disco.cantidad=0;
  }
 

}
