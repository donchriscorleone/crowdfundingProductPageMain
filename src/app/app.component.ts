import { Component } from '@angular/core';
import { CardData } from './components/card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedProject: string = '';
  pledgedProject!: CardData;
  isBackProjectOpen = false;
  completeModalOpen = false;

  cards: CardData[] = [
    {title: 'Bamboo Stand', price: 25, body: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.", quantity: 101},
    {title: 'Black Edition Stand', price: 75, body: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.', quantity: 64},
    {title: 'Mahogany Special Edition', price: 200, body: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.', quantity: 0},
  ] 

  handleBackProject(event: any) {
    this.isBackProjectOpen = event;
  }

  handleCloseModal(modalName: string, event: boolean) {
    if (modalName === 'pledgeProject')
      this.isBackProjectOpen = false;
    else if (modalName === 'completePledge')
      this.completeModalOpen = false;
  }

  onValueChange(event: {selected: string, pledge: number}) {
    this.selectedProject = event.selected;
  }

  handleOnSubmit(event: any) {
    this.pledgedProject = event;
    this.handleCloseModal('pledgeProject', true);
    this.completeModalOpen = true;
  }
}
