import { Component, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Product } from '../../core/services/product';
import { ProductCard } from "../../components/product-card/product-card";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ProductCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

    private _Product = inject(Product);
  stats = this._Product.dashboardStats;

  // دالة الحذف
  onDeleteProduct(productId: number) {
    this._Product.deleteProduct(productId);
  }
}
