import {Component, OnInit} from '@angular/core';
import {Order} from '../model/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];

  createOrderEventHandler($event: any) {
    console.log('Order added');
    this.orders.push($event);
  }

  constructor() {
  }

  ngOnInit() {
    this.orders = this.createMockOrders();
  }

  getHalfOfOrders(left: boolean) {
    const size = this.orders.length;
    const halLength = Math.ceil(size / 2);
    if (left) {
      return this.orders.slice(0, halLength);
    } else {
      return this.orders.slice(halLength, size);
    }
  }

  private createMockOrders(): Order[] {
    const result: Order[] = [];
    for (let i = 0; i < 7; i++) {
      const order = new Order();
      order.name = 'Name' + i;
      order.price = 10 + i;
      order.customerPhoneNumber = 776 + i;
      order.customerSurname = 'customer surname' + i;
      result.push(order);
    }
    return result;
  }

}
