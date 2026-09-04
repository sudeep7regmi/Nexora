import { Product } from "../types/product";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function deleteProduct(id:string):Promise<void> {
    const response = await fetch(`${API_URL}/products/${id}`,{
        method:"DELETE",
        credentials: "include",
    });
    if (!response.ok){
        throw new Error("Failed to delete products");
    }
    
}
