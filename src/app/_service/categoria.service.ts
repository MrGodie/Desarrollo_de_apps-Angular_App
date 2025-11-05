import { Injectable } from '@angular/core';
import { Categoria } from '../_class/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  categorias: Categoria[] = [
    {id:1, nombre:'Bebidas', descripcion:'Frias y Calietes'},
    {id:2, nombre:'Comida', descripcion:'Desayunos, Comidas y Cenas'},
    {id:3, nombre:'Postre', descripcion:'Dulces variados'}];

  constructor(){}

  getCategorias(): Categoria[]{
    return this.categorias;
  }

  getCategoria(id: number): Categoria | undefined{
    return this.categorias.find(cat => cat.id === id);
  }

  addCategoria(categoria: Categoria){
    this.categorias.push(categoria);
  }

  editCategoria(categoria: Categoria){
    const index = this.categorias.findIndex(cat => cat.id === categoria.id);
    if(index !== -1){
      this.categorias[index] = categoria;
    }
  }

  
}
