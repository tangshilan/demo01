import { Component } from '@angular/core';

/**
 * Generated class for the GoodsItmesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'goods-itmes',
  templateUrl: 'goods-itmes.html'
})
export class GoodsItmesComponent {

  text: string;

  constructor() {
    console.log('Hello GoodsItmesComponent Component');
    this.text = 'Hello World';
  }

}
