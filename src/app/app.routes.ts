import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then(c => c.Dashboard)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/product-list/product-list').then(c => c.ProductList)
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./pages/product-detail/product-detail').then(c => c.ProductDetail)
  },
  { path: '**', redirectTo: '/dashboard' } // Fallback for unknown routes
];
