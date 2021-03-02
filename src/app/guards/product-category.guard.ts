import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProductCategoryComponent } from '../modules/portal/product-category/product-category.component';

@Injectable({
  providedIn: 'root'
})
// How to Create a Guard?
// Follow Three Steps
// 1. Build the Route Guard
// 2. Register the guard (portal.module.ts)
// 3. Tie the Guard a route. (portal-routing.module.ts)

export class ProductCategoryGuard implements CanDeactivate<ProductCategoryComponent> {
  canDeactivate(component: ProductCategoryComponent): boolean {
    if(component.productCategoryForm.dirty){
      return confirm('Are you sure want to discard your changes?')
    }
    return true;
  }
}
