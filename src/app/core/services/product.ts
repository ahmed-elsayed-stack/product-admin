import { computed, Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Iproducts } from '../interfaces/iproducts';
import { CATEGORIES, MOCK_PRODUCTS } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class Product {
  // Signals for state management
  private products = signal<Iproducts[]>(MOCK_PRODUCTS);
  private searchQuery = signal<string>('');
  private selectedCategory = signal<string>('All');
  private loading = signal<boolean>(false);

  // إضافة إشارات الـ Pagination هنا
  private currentPage = signal<number>(1);
  private itemsPerPage = signal<number>(10);

  // ✅ إضافة Subject للـ Debounced Search
  private searchSubject = new Subject<string>();

  constructor() {
    // ✅ إعداد الـ Debounced Search (300ms)
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(query => {
      this.searchQuery.set(query);
      this.currentPage.set(1);
      this.setLoading(false);
    });
  }

  // Computed signals
  filteredProducts = computed(() => {
    const products = this.products();
    const query = this.searchQuery().toLowerCase();
    const category = this.selectedCategory();

    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(query);
      const matchesCategory = category === 'All' || product.category === category;
      return matchesSearch && matchesCategory;
    });
  });

  // تعديل الـ paginatedProducts لاستخدام الإشارات الجديدة
  paginatedProducts = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage();
    const endIndex = startIndex + this.itemsPerPage();
    return this.filteredProducts().slice(startIndex, endIndex);
  });

  // إضافة computed signal لـ totalPages
  totalPages = computed(() => {
    return Math.ceil(this.filteredProducts().length / this.itemsPerPage());
  });

  // Dashboard statistics
  dashboardStats = computed(() => {
    const products = this.products();
    const total = products.length;
    const average = total > 0 ? products.reduce((sum, p) => sum + p.price, 0) / total : 0;

    return {
      totalProducts: total,
      inStockCount: products.filter(p => p.inStock).length,
      averagePrice: average,
      recentProducts: products.slice(-5) // Last 5 products
    };
  });

  // Methods
  setSearchQuery(query: string) {
    this.setLoading(true);
    this.searchSubject.next(query); // ✅ استخدام الـ Subject بدل set مباشر
  }

  setCategory(category: string) {
    this.selectedCategory.set(category);
    this.currentPage.set(1); // إعادة التعيين للصفحة الأولى عند التصفية
  }

  // إضافة methods الـ Pagination
  setCurrentPage(page: number) {
    this.currentPage.set(page);
  }

  setItemsPerPage(items: number) {
    this.itemsPerPage.set(items);
    this.currentPage.set(1); // Reset to first page
  }

  // الحصول على حالة الـ Pagination الحالية
  getPaginationState() {
    return {
      currentPage: this.currentPage(),
      itemsPerPage: this.itemsPerPage(),
      totalPages: this.totalPages()
    };
  }

  getProductById(id: number) {
    return this.products().find(product => product.id === id);
  }

  updateProduct(updatedProduct: Iproducts) {
    this.products.update(products =>
      products.map(p => p.id === updatedProduct.id ? updatedProduct : p)
    );
  }

  // ✅ دالة الحذف
  deleteProduct(id: number) {
    this.products.update(products =>
      products.filter(product => product.id !== id)
    );
  }

  getCategories() {
    return CATEGORIES;
  }

  setLoading(loading: boolean) {
    this.loading.set(loading);
  }

  isLoading = computed(() => this.loading());
}
