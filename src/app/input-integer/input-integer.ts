import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

import { FormsModule } from '@angular/forms';
import {Disco} from '../discos-list/Disco'
@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger  implements OnInit
{
@Input() 
cantidad! : number;

@Input()
max !: number;

@Output()
cantidadChange : EventEmitter<number> = new EventEmitter<number>();

@Output()
maxStock : EventEmitter<string> = new EventEmitter<string>();


constructor(){}


ngOnInit(): void {
  
}

  upCantidad() : void{
    if (this.cantidad< this.max){
       this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }else
      this.maxStock.emit("Sin discos en stock! :(");

  }
  downCantidad() : void {
    if (this.cantidad>0)
      this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
  }


}
