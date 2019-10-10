import { Product } from '../../product.model';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter

} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productoClick: EventEmitter<any> = new EventEmitter(); // indicamos el tipo :

  fecha = new Date();

  constructor() {
    console.log('1 - constructor');
  }

  ngOnInit() {
    console.log('3- oninit', this.product);
  }

  addCart() {
    console.log('añadir al carrito');
    this.productoClick.emit(this.product.id);
  }


}
