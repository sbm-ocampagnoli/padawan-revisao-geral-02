import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../fruit';
import { FruitService } from 'src/app/service/fruit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  fruits: Fruit[] = [];
  editMode: boolean = false;

  constructor(private service: FruitService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll()
      .subscribe((fruits: Fruit[]) => {
        console.log(fruits);
        this.fruits = fruits;
      });
  }

  deleteFruit(id: number) : void {
    this.service.deleteFruit(id).subscribe();
  }

  openEditMode(){
    this.editMode = true;
  }

  updateFruit(fruit: Fruit) {
    debugger
    this.service.updateFruit(fruit.id, fruit).subscribe();
    this.editMode = false;
  }
}
