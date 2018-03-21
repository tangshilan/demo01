import { Component } from '@angular/core';

/**
 * Generated class for the GoodsItmeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'goods-itme',
  templateUrl: 'goods-itme.html'
})
export class GoodsItmeComponent {

  text: string;

  constructor() {
    console.log('Hello GoodsItmeComponent Component');
    this.text = 'Hello World';
  }

}
