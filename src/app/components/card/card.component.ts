import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface CardData {
  title: string,
  price: number,
  body: string,
  quantity: number,
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data!: CardData;
  @Input() isSelected?: boolean;
  @Input() hasRadio?: boolean;
  @Input() maxWidth?: boolean;
  @Input() hasActions?: boolean;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() onSubmit: EventEmitter<CardData> = new EventEmitter();
  pledge!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.pledge = new FormControl(null, [Validators.required, Validators.min(this.data.price)]);
  }

  handleSelect(event: any) {
    this.valueChange.emit({selected: this.data.title, pledge: this.pledge.value})
  }

  handleSubmit() {
    this.onSubmit.emit(this.data);
  }

}
