import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetodoPago } from '../../_class/metodo-pago';

@Component({
  selector: 'app-metodo-pago-modal',
  templateUrl: './metodo-pago-modal.component.html',
  styleUrls: ['./metodo-pago-modal.component.css', '../../app.css'],
  standalone: false
})
export class MetodoPagoModalComponent implements OnChanges {
  @Input() showModal = false;
  @Input() modalTitle = '';
  @Input() data: MetodoPago | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<MetodoPago>();

  formData: FormGroup;
  edit = false;

  constructor(private builder: FormBuilder) {
    this.formData = this.builder.group({
      id: [''],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.edit = true;
      this.formData.patchValue(this.data);
    } else {
      this.edit = false;
      this.formData.reset();
    }
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  saveModal(): void {
    if (this.formData.valid) {
      this.saveEvent.emit(this.formData.value);
    } else {
      this.formData.markAllAsTouched();
    }
  }
}

