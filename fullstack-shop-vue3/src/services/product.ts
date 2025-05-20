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

