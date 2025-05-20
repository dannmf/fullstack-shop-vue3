import axios from 'axios';

export async function fetchProducts(page: number, limit: number) {
  const response = await axios.get('/products', {
    params: {
      page,
      limit,
    },
  });
  return response.data;
}

export async function fetchProductsCount() {
  const response = await axios.get('/products', {
  });
  return response.data;
}

export async function fetchRecentProducts() {
  const response = await axios.get('/products', {
  });
  return response.data;
 }

export async function fetchLowStockProducts() {
  const response = await axios.get('/products', {
  });
  return response.data;
 }

