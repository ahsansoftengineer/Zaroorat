import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../../../models/interfaces/product.interface';
import { ProductTypeInterface } from '../../../models/interfaces/product-type.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  productCategories: ProductTypeInterface[] = [
    {id:1, productType:'Food'},
    {id:2, productType:'Drink'},
    {id:3, productType:'Bakery'}
  ]
  public products: ProductInterface[] = [
    {
      id: 101,
      productTitle:'Pepsi',
      productCategory:  this.productCategories,
      stock:100,
      sale:20,
      wholeSaleRate:50,
      retailRate:55,
      tex:17,
      shipmentCharges:2,
      featured:true,
      description:'Not Yet define',
      image:'https://banner2.cleanpng.com/20180202/cte/kisspng-soft-drink-coca-cola-pepsi-one-pepsi-max-pepsi-png-file-5a7527a82193c3.3912714915176273041375.jpg'
    },
    {
      id: 102,
      productTitle:'Cocacola',
      productCategory: [this.productCategories[0]],
      stock:120,
      sale:30,
      wholeSaleRate:50,
      retailRate:55,
      tex:17,
      shipmentCharges:2,
      featured:false,
      description:'Not Yet define',
      image:'https://www.pngfind.com/pngs/m/675-6757496_coca-cola-cold-drink-can-hd-png-download.png'
    },
    {
      id: 103,
      productTitle:'Lays',
      productCategory: [this.productCategories[1], this.productCategories[2]],
      stock:150,
      sale:40,
      wholeSaleRate:20,
      retailRate:22,
      tex:17,
      shipmentCharges:2,
      featured:false,
      description:'Not Yet define',
      image:'https://e7.pngegg.com/pngimages/484/133/png-clipart-potato-chip-pepsi-flavor-lay-s-frito-lay-pepsi.png'
    },
    {
      id: 104,
      productTitle:'Nugets',
      productCategory: [this.productCategories[2], this.productCategories[0]],
      stock:200,
      sale:30,
      wholeSaleRate:150,
      retailRate:155,
      tex:17,
      shipmentCharges:2,
      featured:true,
      description:'Not Yet define',
      image:'https://www.vhv.rs/dpng/d/422-4223979_chicken-nugget-png-download-dominos-chicken-nuggets-transparent.png'
    },
    {
      id: 105,
      productTitle:'Pizza',
      productCategory: [this.productCategories[0], this.productCategories[0]],
      stock:100,
      sale:20,
      wholeSaleRate:50,
      retailRate:55,
      tex:17,
      shipmentCharges:2,
      featured:true,
      description:'I am loving it',
      image:'https://i.pinimg.com/originals/82/b7/53/82b753702b41b811df5a80ed807c0987.jpg'
    },
    {
      id: 106,
      productTitle:'Merinda',
      productCategory: [this.productCategories[0]],
      stock:120,
      sale:30,
      wholeSaleRate:50,
      retailRate:55,
      tex:17,
      shipmentCharges:2,
      featured:true,
      description:'Not Yet define',
      image:'https://thumbnail.imgbin.com/24/14/10/imgbin-milkshake-fizzy-drinks-pepsi-mirinda-soft-drink-mirinda-juice-illustration-DaiehRgXP2Jvgu1ecatTj1vjq_t.jpg'
    },
    {
      id: 107,
      productTitle:'Vawy',
      productCategory: [this.productCategories[2]],
      stock:100,
      sale:20,
      wholeSaleRate:50,
      retailRate:55,
      tex:17,
      shipmentCharges:2,
      featured:false,
      description:'Not Yet define',
      image:'https://simg.nicepng.com/png/small/301-3015690_wavy-lays-original-potato-chips-wavy-original-potato.png'
    },
    {
      id: 108,
      productTitle:'Diaper',
      productCategory: [this.productCategories[0], this.productCategories[0]],
      stock:100,
      sale:20,
      wholeSaleRate:50,
      retailRate:55,
      tex:17,
      shipmentCharges:2,
      featured:true,
      description:'Not Yet define',
      image:'https://png.pngtree.com/png-clipart/20190214/ourmid/pngtree-baby-diaper-element-png-image_553220.jpg'
    },
    {
      id: 109,
      productTitle:'Sooper',
      productCategory: [this.productCategories[0], this.productCategories[0]],
      stock:1000,
      sale:200,
      wholeSaleRate:20,
      retailRate:18,
      tex:0.5,
      shipmentCharges:2,
      featured:false,
      description:'Not Yet define',
      image:'https://xambeel.com/wp-content/uploads/2019/04/sooper.png'
    }
  ];
}
