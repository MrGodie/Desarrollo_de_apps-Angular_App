import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../_class/producto';

@Component({
  selector: 'app-producto-modal',
  templateUrl: './producto-modal.component.html',
  styleUrls: ['./producto-modal.component.css','../../app.css'],
  standalone: false
})
export class ProductoModalComponent implements OnChanges {
  @Input() showModal = false;
  @Input() modalTitle = '';
  @Input() data: Producto | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<Producto>();

  formData: FormGroup;
  edit = false;

  constructor(private builder: FormBuilder) {
    this.formData = this.builder.group({
      id: [''],
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
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
