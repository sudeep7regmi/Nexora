export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface ProductVariant {
    id: string;
    productId: string;
    sku: string;
    name: string;
    price: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Product {
    id: string;
    categoryId: string;
    name: string;
    slug: string;
    description: string | null;
    brand: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  
    category: Category;
    variants: ProductVariant[];
  }