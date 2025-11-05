import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: false,
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  @Input() messageTitle = "";
  @Input() messageBody = "";
  @Input() showModal = false;
  @Input() uri = "";
  @Output() aceptar = new EventEmitter<string>();

  aceptarEvent() {
    this.aceptar.emit(this.uri);
  }
}
