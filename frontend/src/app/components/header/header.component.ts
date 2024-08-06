import { FruitComponent } from './../fruit/fruit/fruit.component';
import { Fruit } from './../fruit';
import { Component, OnInit } from '@angular/core';
import { FruitService } from 'src/app/service/fruit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  addMode: boolean = false;
  newFruit: Fruit = { name: "", season: "", pricePerKg: 0.0};
  fruitFilter: {name: string, season: string, pricePerKg: number} = {
    name: "",
    season: "",
    pricePerKg: 0.00
  };

  fruits: Fruit [] = [];

  constructor(private fruitService: FruitService) {

  }

  ngOnInit(): void {
  }

  addFruit(fruit: Fruit) {
    this.fruitService.addFruit(fruit).subscribe();
    this.addMode = false;
    this.fruits = [];
    }

  openAddMode() {
    this.addMode = true;
    this.fruits = [];
  }

  search(fruitFilter: any) {
    console.log(fruitFilter)
    this.fruitService.filter(fruitFilter).subscribe((fruits: Fruit[]) => {
      this.fruits = fruits;
    });
  }
}
