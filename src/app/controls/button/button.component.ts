import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Input() disabled: boolean = false;
  @Input() isIcon: boolean = false;
  @Input() isMarked!: boolean;
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' = 'sm';

  constructor() { }

  ngOnInit(): void {

  }
}
