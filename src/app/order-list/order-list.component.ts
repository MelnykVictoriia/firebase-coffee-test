import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  coffeeOrders: any;
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getCoffeeOrders();
  }

  getCoffeeOrders(): void {
    this.ordersService.getCoffeeOrders().subscribe(res => {
      this.coffeeOrders = res;
      console.log(this.coffeeOrders);
    })
  }

  markCompleted(order) {
    this.ordersService.updateCoffeeOrder(order);
    this.getCoffeeOrders();
  }

  deleteCoffeeOrder(order) {
    this.ordersService.deleteCoffeeOrder(order);
    this.getCoffeeOrders();
  }

}
