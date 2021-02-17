import { Injectable } from "@angular/core";
import { ProductCategoryInterface } from "../models/interfaces/product-category.interface";
import { ProductInterface } from "../models/interfaces/product.interface";
import { ProductCategoryService } from "./product-category.service";

@Injectable()
export class ProductService implements ProductInterface {
  public productCategoryService?: ProductCategoryService = new ProductCategoryService();
  public productCategories?: ProductCategoryInterface[] = this.productCategoryService.productCategories;

  public id: number;
  public userId: number;
  public productTitle: string;
  public productType: ProductCategoryInterface[];
  public stock: number;
  public sale?: number;
  public wholeSaleRate?: number;
  public retailRate?: number;
  public tex?: number;
  public shipmentCharges?: number;
  public description?: string;
  public featured?: boolean;
  public image?: any;
  constructor() {
  }

  public products?: ProductInterface[] = [
    {
      id: 101,
      userId: 2001,
      productTitle: "Pepsi",
      productType: [this.productCategories[0], this.productCategories[1]],
      stock: 100,
      sale: 20,
      wholeSaleRate: 50,
      retailRate: 55,
      tex: 17,
      shipmentCharges: 2,
      featured: true,
      description: "Not Yet define",
      image:
        "https://banner2.cleanpng.com/20180202/cte/kisspng-soft-drink-coca-cola-pepsi-one-pepsi-max-pepsi-png-file-5a7527a82193c3.3912714915176273041375.jpg",
    },
    {
      id: 102,
      userId: 2001,
      productTitle: "Cocacola",
      productType: [this.productCategories[1], this.productCategories[2]],
      stock: 120,
      sale: 30,
      wholeSaleRate: 50,
      retailRate: 55,
      tex: 17,
      shipmentCharges: 2,
      featured: false,
      description: "Not Yet define",
      image:
        "https://www.pngfind.com/pngs/m/675-6757496_coca-cola-cold-drink-can-hd-png-download.png",
    },
    {
      id: 103,
      userId: 2002,
      productTitle: "Lays",
      productType: [this.productCategories[2], this.productCategories[3]],
      stock: 150,
      sale: 40,
      wholeSaleRate: 20,
      retailRate: 22,
      tex: 17,
      shipmentCharges: 2,
      featured: false,
      description: "Not Yet define",
      image:
        "https://e7.pngegg.com/pngimages/484/133/png-clipart-potato-chip-pepsi-flavor-lay-s-frito-lay-pepsi.png",
    },
    {
      id: 104,
      userId: 2005,
      productTitle: "Nugets",
      productType: [this.productCategories[4], this.productCategories[5]],
      stock: 200,
      sale: 30,
      wholeSaleRate: 150,
      retailRate: 155,
      tex: 17,
      shipmentCharges: 2,
      featured: true,
      description: "Not Yet define",
      image:
        "https://www.vhv.rs/dpng/d/422-4223979_chicken-nugget-png-download-dominos-chicken-nuggets-transparent.png",
    },
    {
      id: 105,
      userId: 2004,
      productTitle: "Pizza",
      productType: [this.productCategories[6], this.productCategories[7]],
      stock: 100,
      sale: 20,
      wholeSaleRate: 50,
      retailRate: 55,
      tex: 17,
      shipmentCharges: 2,
      featured: true,
      description: "I am loving it",
      image:
        "https://i.pinimg.com/originals/82/b7/53/82b753702b41b811df5a80ed807c0987.jpg",
    },
    {
      id: 106,
      userId: 2003,
      productTitle: "Merinda",
      productType: [
        this.productCategories[8],
        this.productCategories[1],
        this.productCategories[9],
      ],
      stock: 120,
      sale: 30,
      wholeSaleRate: 50,
      retailRate: 55,
      tex: 17,
      shipmentCharges: 2,
      featured: true,
      description: "Not Yet define",
      image:
        "https://thumbnail.imgbin.com/24/14/10/imgbin-milkshake-fizzy-drinks-pepsi-mirinda-soft-drink-mirinda-juice-illustration-DaiehRgXP2Jvgu1ecatTj1vjq_t.jpg",
    },
    {
      id: 107,
      userId: 2001,
      productTitle: "Vawy",
      productType: [this.productCategories[0], this.productCategories[1]],
      stock: 100,
      sale: 20,
      wholeSaleRate: 50,
      retailRate: 55,
      tex: 17,
      shipmentCharges: 2,
      featured: false,
      description: "Not Yet define",
      image:
        "https://simg.nicepng.com/png/small/301-3015690_wavy-lays-original-potato-chips-wavy-original-potato.png",
    },
    {
      id: 108,
      userId: 2004,
      productTitle: "Diaper",
      productType: [this.productCategories[6], this.productCategories[7]],
      stock: 100,
      sale: 20,
      wholeSaleRate: 50,
      retailRate: 55,
      tex: 17,
      shipmentCharges: 2,
      featured: true,
      description: "Not Yet define",
      image:
        "https://png.pngtree.com/png-clipart/20190214/ourmid/pngtree-baby-diaper-element-png-image_553220.jpg",
    },
    {
      id: 109,
      userId: 2005,
      productTitle: "Sooper",
      productType: [this.productCategories[8], this.productCategories[9]],
      stock: 1000,
      sale: 200,
      wholeSaleRate: 20,
      retailRate: 18,
      tex: 0.5,
      shipmentCharges: 2,
      featured: false,
      description: "Not Yet define",
      image: "https://xambeel.com/wp-content/uploads/2019/04/sooper.png",
    },
  ];
}