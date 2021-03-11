import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProductsComponent } from '../modules/portal/products/products.component';

@Injectable({
  providedIn: 'root'
})
// How to Create a Guard?
// Follow Three Steps
// 1. Build the Route Guard
// 2. Register the guard (portal.module.ts)
// 3. Tie the Guard a route. (portal-routing.module.ts)

export class ProductGuard implements CanDeactivate<ProductsComponent> {
  canDeactivate(component: ProductsComponent): boolean {
    if(component.form.dirty){
      return confirm('Are you sure want to discard changes of Product Form?')
    }
    return true;
  }
}
