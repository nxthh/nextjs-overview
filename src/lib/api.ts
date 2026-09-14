const API_URL = "https://api.escuelajs.co/api/v1";

export type ProductCategory = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  category: ProductCategory;
};

async function apiRequest<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Platzi Fake Store request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function getProducts(limit = 12) {
  return apiRequest<Product[]>(`/products?offset=0&limit=${limit}`);
}

export function getProduct(slug: string) {
  return apiRequest<Product>(`/products/slug/${encodeURIComponent(slug)}`);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
