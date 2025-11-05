import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Menu } from './_class/menu';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false
})
export class App {
  menu: Menu[] = [
    { description: "menu.catalogos-generales", views: [
      { description: "views.productos", url: "/catalogos-generales/productos" },
      { description: "views.categorias", url: "/catalogos-generales/categorias" },
      { description: "views.unidades-de-medida", url: "/catalogos-generales/unidades-de-medida" },
      { description: "views.proveedores", url: "/catalogos-generales/proveedores" },
      { description: "views.metodos-pago", url: "/catalogos-generales/metodos-pago" }
    ]},
    { description: "menu.procesos", views: [
      { description: "views.compras", url: "/procesos/compras" },
      { description: "views.ventas", url: "/procesos/ventas" },
      { description: "views.inventario", url: "/procesos/inventario" },
      { description: "views.movimientos-inventario", url: "/procesos/movimientos-inventario" },
      { description: "views.apertura-caja", url: "/procesos/apertura-caja" },
      { description: "views.cierre-caja", url: "/procesos/cierre-caja" },
      { description: "views.otros-movimientos", url: "/procesos/otros-movimientos" }
    ]},
    { description: "menu.administracion", views: [
      { description: "views.usuarios", url: "/administracion/usuarios" }
    ]}

  ]
  constructor(private translocoService: TranslocoService,
    private http: HttpClient
  ){
    console.log('App comoponent initialized');
  }

  ngOnInit(){
    this.translocoService.setActiveLang('es');
    this.translocoService.load('es').subscribe(data =>{
      console.log('Transloco loaded:', data);
    });
  }
}
