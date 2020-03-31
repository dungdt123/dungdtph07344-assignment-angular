import { Component, OnInit, Input} from '@angular/core';
import { Products } from '../Products';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  product : Products;

  constructor(
    private productService :ProductService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  }
  
}
