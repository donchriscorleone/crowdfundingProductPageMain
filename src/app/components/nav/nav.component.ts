import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isDialogShown: boolean = false
  isBookMarked: boolean = false;

  @Output() backProject = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleMenu(dialog: any) {
    this.isDialogShown ? dialog.close() : dialog.show();
    this.isDialogShown = !this.isDialogShown;
  }

  handleBackProject() {
    this.backProject.emit(true);
  }
}
