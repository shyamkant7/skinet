import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pagination } from './models/pagination';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Pagination<Product[]>>(
        'https://localhost:5001/api/products?pageSize=50'
      )
      .subscribe((response) => {
        this.products = response.data;
      });
  }
}
