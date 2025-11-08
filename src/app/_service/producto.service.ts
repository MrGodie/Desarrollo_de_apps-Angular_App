import { Injectable } from '@angular/core';
import { Producto} from '../_class/producto';
@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  data: Producto[] = [
      {id:1, name:'Pepsi', price: '17', category: 'Bebidas', exist: true, active: true},
      {id:2, name:'Hambuerguesa', price: '65', category: 'Comida', exist: true, active: true},
      {id:3, name:'Chocolate', price: '22', category: 'Dulces', exist: true, active: true}];
  
    constructor(){}
  
    getAll(): Producto[]{
      return this.data;
    }
  
    get(id: number): Producto| undefined{
      return this.data.find(d => d.id === id);
    }
  
    add(value: Producto){
      this.data.push(value);
    }
  
    edit(value: Producto){
      const index = this.data.findIndex(d => d.id === value.id);
      if(index !== -1){
        this.data[index] = value;
      }
    } 
    delete(id: number){
      this.data = this.data.filter(d => d.id !== id);
    }
}