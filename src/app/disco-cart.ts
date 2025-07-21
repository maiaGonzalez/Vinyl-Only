import { Injectable } from '@angular/core';
import { Disco } from './discos-list/Disco';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class DiscoCart {

  private _cartList: Disco[] = [];
 
   _cartListSubject: BehaviorSubject<Disco[]> = new BehaviorSubject(this._cartList); //podría inicializarlo vacío, se vincula igualmente luego en el next

  cartList$ = this._cartListSubject.asObservable();


  constructor() { }

  addToCart(disco : Disco){
    if (disco.cantidad >0){
    let item = this._cartList.find((v1)=> v1.nombre == disco.nombre)
      if (!item){ //aca no declaro a item del tipo Disco ya que me tiraba error porque deberia convertir algo del tipo disco en algo del tipo undefined, asiq lo saco y me toma if !item si item==undefined
          this._cartList.push({ ... disco});
      }else{
        item.cantidad += disco.cantidad;
      }
        
      console.log(this._cartList.length)
      this._cartListSubject.next(this._cartList); 
    }
  }
  removeToCart(disco : Disco){
        this._cartList = this._cartList.filter(item => item.nombre !== disco.nombre);
        this._cartListSubject.next(this._cartList);
          
    }
  }

  

