import { Component, Input, OnInit } from '@angular/core';
import { Fruit } from '../../fruit';
import { FruitService } from 'src/app/service/fruit.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

 @Input() fruits: Fruit[] = [];
  editMode: boolean = false;

  constructor(private service: FruitService) { }

  ngOnInit(): void {

  }

  getAll(): void {
    this.service.getAll()
      .subscribe((fruits: Fruit[]) => {
        console.log(fruits);
        this.fruits = fruits;
      });
  }

  deleteFruit(fruit: Fruit) : void {
    this.service.deleteFruit(fruit).subscribe();
    window.location.reload();
  }

  openEditMode(){
    this.editMode = true;
  }

  updateFruit(fruit: Fruit) {
    this.service.updateFruit(fruit).subscribe();
    this.editMode = false;
    window.location.reload();
  }
}
