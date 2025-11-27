import { Component, input, output, signal } from '@angular/core';
import { Iproducts } from '../../core/interfaces/iproducts';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
   product = input.required<Iproducts>();
  showDeleteModal = signal(false);
  deleteProduct = output<number>(); // ✅ هذا الـ output المهم

  constructor(private router: Router) {}

  goToProductDetails() {
    this.router.navigate(['/products', this.product().id]);
  }

  onDeleteClick() {
    this.showDeleteModal.set(true);
  }

  onConfirmDelete() {
    this.deleteProduct.emit(this.product().id); // ✅ التأكد من الـ emit
    this.showDeleteModal.set(false);
  }

  onCancelDelete() {
    this.showDeleteModal.set(false);
  }
}
