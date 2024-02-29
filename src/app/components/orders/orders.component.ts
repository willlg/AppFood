import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent  implements OnInit {
  @Input() orders: any;

  constructor() { }

  ngOnInit() {}

}
