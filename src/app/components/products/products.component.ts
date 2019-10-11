import { ProductsService } from '../../services/products.service';
import { Product } from '../../product.model';
import {  Component,  OnInit} from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productsService:ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  clickProduct(id: number) {
    console.log('product ', id);
  }

}
