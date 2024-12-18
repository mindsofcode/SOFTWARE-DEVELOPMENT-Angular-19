import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {resolve} from "node:path";



@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  value: string = 'case1'; // Current switch case value
  items: any[] = [{name: 'item1'}, {name: 'item2'}, {name: 'item3'}];






  async loadComponent() {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
}
