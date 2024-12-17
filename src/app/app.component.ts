import {Component, computed, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'hello-world';


  quantity = signal(1);
  unitPrice = signal(12);

  totalPrice = computed(() => this.quantity() * this.unitPrice());

  changeQuantity(amount: number) {
    this.quantity.update(qty => qty + amount);
  }

  changePrice(amount: number) {
    this.unitPrice.update(price => price + amount);
  }
}
