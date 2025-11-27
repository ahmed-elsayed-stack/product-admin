import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../core/services/product';
import { Iproducts } from '../../core/interfaces/iproducts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [FormsModule , CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {

    private route = inject(ActivatedRoute);
  private router = inject(Router);
  private _Product = inject(Product);

  product = signal<Iproducts | null>(null);
  editedProduct = signal<Iproducts | null>(null);
  isEditing = signal(false);

  // Form validation
  formErrors = signal<{ [key: string]: string }>({});

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      const foundProduct = this._Product.getProductById(productId);

      if (foundProduct) {
        this.product.set(foundProduct);
        this.editedProduct.set({ ...foundProduct });
      }
    });
  }

  startEditing() {
    this.isEditing.set(true);
  }

  cancelEditing() {
    this.isEditing.set(false);
    this.editedProduct.set(this.product() ? { ...this.product()! } : null);
    this.formErrors.set({});
  }

  validateForm(): boolean {
    const errors: { [key: string]: string } = {};
    const product = this.editedProduct()!;

    if (!product.name?.trim()) {
      errors['name'] = 'Product name is required';
    }

    if (!product.price || product.price <= 0) {
      errors['price'] = 'Price must be a positive number';
    }

    if (!product.category?.trim()) {
      errors['category'] = 'Category is required';
    }

    this.formErrors.set(errors);
    return Object.keys(errors).length === 0;
  }

  saveProduct() {
    if (!this.validateForm()) return;

    const updatedProduct = this.editedProduct()!;
    this._Product.updateProduct(updatedProduct);
    this.product.set(updatedProduct);
    this.isEditing.set(false);
    this.formErrors.set({});
  }

  goBack() {
    this.router.navigate(['/products']);
  }

}
