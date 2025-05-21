// src/services/product.ts
import axios from 'axios';
import { api } from '@/services/api';

export async function fetchProducts(page: number, limit: number) {
  const response = await api.get('/product', {
    params: {
      page,
      limit,
    },
  });
  return response.data;
}

export async function fetchProductsCount() {
  const response = await api.get(`/product/count`, {
  });
  return response.data.count;
}

export async function fetchRecentProducts() {
  const response = await axios.get('/products', {
  });
  return response.data;
}

export async function fetchLowStockProducts() {
  const response = await api.get('/product/lowStock', {
  });
  return response.data;
}

export async function updateProduct(id: number, product: any) {
  const response = await api.put(`/product/${id}`, product);
  return response.data;
}

// Novas funções
export async function createProduct(product: any) {
  const response = await api.post('/product', product);
  return response.data;
}

export async function deleteProduct(id: number) {
  const response = await api.delete(`/product/${id}`);
  return response.data;
}