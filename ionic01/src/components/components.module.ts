import { NgModule } from '@angular/core';
import { GoodsItmeComponent } from './goods-itme/goods-itme';
import { GoodsItmesComponent } from './goods-itmes/goods-itmes';
@NgModule({
	declarations: [GoodsItmeComponent,
    GoodsItmesComponent],
	imports: [],
	exports: [GoodsItmeComponent,
    GoodsItmesComponent]
})
export class ComponentsModule {}
