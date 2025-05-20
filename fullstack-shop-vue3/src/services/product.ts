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

}

export async function fetchRecentProducts() {
}

