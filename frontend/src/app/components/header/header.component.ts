import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from 'src/app/service/fruit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  addMode: boolean = false;
  newFruit: Fruit = { name: "", season: "", pricePerKg: 0.0};

  constructor(private fruitService: FruitService) {

  }

  ngOnInit(): void {
  }

  addFruit(fruit: Fruit) {
    this.fruitService.addFruit(fruit).subscribe();
    this.addMode = false;
    window.location.reload();
  }

  openAddMode() {
    this.addMode = true;
  }

}
