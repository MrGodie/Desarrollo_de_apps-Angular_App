import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { Producto } from '../_class/producto';
import { Router } from '@angular/router';
import { ProductoService } from '../_service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.html',
  styleUrls: ['./productos.css', "../app.css"],
  standalone: false,
})
export class Productos extends AppReport implements OnInit{
  
  productos: Producto[] = [];
  showModal= false;
  modalTitle= '';
  producto: Producto | null = null;
  uri= '/catalogos-generales/productos';

  

  constructor(private service: ProductoService, router : Router) { 
    super(router);
     this.productos = this.service.getAll();
  }


  ngOnInit(): void {
   
  }


  openAddModal() {
    this.modalTitle = 'productos.add-producto';
    this.producto = null;
    this.showModal = true;
  }

  openEditModal(producto: Producto) {
    this.modalTitle = 'productos.edit.producto';
    this.producto = producto;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.producto = null;
    this.modalTitle = ''; 
  }

  saveEvent(producto: Producto) {
    if (producto.id) {
      // Edit existing 
      this.service.edit(producto);
    } else {
      // Add new 
      this.service.add(producto);
    }

    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "messages.success";
    this.messageBody = "messages.save-success";
}


}
