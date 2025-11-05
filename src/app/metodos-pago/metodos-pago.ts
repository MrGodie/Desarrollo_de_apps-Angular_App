import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { MetodoPago } from '../_class/metodo-pago';
import { Router } from '@angular/router';
import { MetodoPagoService } from '../_service/metodo-pago.service';

@Component({
  selector: 'app-metodos-pago',
  templateUrl: './metodos-pago.html',
  styleUrls: ['./metodos-pago.css', "../app.css"],
  standalone: false
})
export class MetodosPago extends AppReport implements OnInit {


  metodosPago: MetodoPago[] = [];
  showModal= false;
  modalTitle= '';
  metodoPago: MetodoPago | null = null;
  uri= '/catalogos-generales/metodos-pago';

  

  constructor(private service: MetodoPagoService, router : Router) { 
    super(router);
     this.metodosPago = this.service.getAll();
  }


  ngOnInit(): void {
   
  }


  openAddModal() {
    this.modalTitle = 'metodos.pago.add-metodo-pago';
    this.metodoPago = null;
    this.showModal = true;
  }

  openEditModal(metodoPago: MetodoPago) {
    this.modalTitle = 'categorias.edit-category';
    this.metodoPago = metodoPago;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.metodoPago = null;
    this.modalTitle = '';
  }

  saveEvent(metodoPago: MetodoPago) {
    if (metodoPago.id) {
      // Edit existing 
      this.service.edit(metodoPago);
    } else {
      // Add new 
      this.service.add(metodoPago);
    }

    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "message.sucess";
    this.messageBody = "messages.save-sucess";
}

}