import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  orders=[];
  isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
    this.LoadingAccount();
    this.orders = [
      {
          name: 'Dom Henrique',
          location: 'Guarapuava, Paraná',
          price: 60.00,
          status: 'Entregue',
          items: ['Pizza x2', 'Burguer x2'],
          date: 'Janeiro 29, 2024'
        },
        {
          name: 'Dom Henrique ',
          location: 'Guarapuava, Paraná',
          price: 300.00,
          status: 'Entregue',
          items: ['Pizza x8'],
          date: 'Janeiro 29, 2024'
        },
        {
          name: 'Dom Henrique 2',
          location: 'Guarapuava, Paraná',
          price: 100.00,
          status: 'Entregue',
          items: ['Salada Especial x5'],
          date: 'Janeiro 29, 2024'
        },
        {
          name: 'Dom Henrique',
          location: 'Guarapuava, Paraná',
          price: 60.00,
          status: 'Entregue',
          items: ['Pizza x2', 'Burguer x2'],
          date: 'Janeiro 29, 2024'
        }
    ];
  }
  async LoadingAccount(){
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
