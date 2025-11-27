import { Component, inject, signal } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { CommonModule } from '@angular/common';
import { Pagination } from "../../components/pagination/pagination";
import { Iproducts } from '../../core/interfaces/iproducts';
import { Product } from '../../core/services/product';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, CommonModule, Pagination],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  private _Product = inject(Product);

  products = this._Product.filteredProducts;
  categories = this._Product.getCategories();

  searchQuery = signal('');
  selectedCategory = signal('All');
  currentPage = signal(1);
  itemsPerPage = 10;

  paginatedProducts = signal<Iproducts[]>([]);
  totalPages = signal(0);

  constructor() {
    this.updateComputedValues();
  }

  private updateComputedValues() {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts.set(this.products().slice(startIndex, endIndex));
    this.totalPages.set(Math.ceil(this.products().length / this.itemsPerPage));
  }

  onSearch(query: string) {
    this.searchQuery.set(query);
    this._Product.setSearchQuery(query);
    this.currentPage.set(1);
    this.updateComputedValues();
  }

  onCategoryChange(category: string) {
    this.selectedCategory.set(category);
    this._Product.setCategory(category);
    this.currentPage.set(1);
    this.updateComputedValues();
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
    this.updateComputedValues();
  }

  // ✅ أضف هذه الميثود علشان تتعامل مع event الحذف
  onDeleteProduct(productId: number) {
    this._Product.deleteProduct(productId);
    this.updateComputedValues(); // علشان يتحدد الـ UI فوراً
  }
}

