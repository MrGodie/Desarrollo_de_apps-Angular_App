import { Injectable } from '@angular/core';
import { MetodoPago } from '../_class/metodo-pago';

@Injectable({
  providedIn: 'root',
})
export class MetodoPagoService {
  data: MetodoPago[] = [
      {id:1, nombre:'Bebidas', descripcion:'Frias y Calietes'},
      {id:2, nombre:'Comida', descripcion:'Desayunos, Comidas y Cenas'},
      {id:3, nombre:'Postre', descripcion:'Dulces variados'}];
  
    constructor(){}
  
    getAll(): MetodoPago[]{
      return this.data;
    }
  
    get(id: number): MetodoPago | undefined{
      return this.data.find(d => d.id === id);
    }
  
    add(value: MetodoPago){
      this.data.push(value);
    }
  
    edit(value: MetodoPago){
      const index = this.data.findIndex(d => d.id === value.id);
      if(index !== -1){
        this.data[index] = value;
      }
    } 
    delete(id: number){
      this.data = this.data.filter(d => d.id !== id);
    }
}
