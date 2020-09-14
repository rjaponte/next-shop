export interface Category {
  id: number,
  name: string,
  featuredProduct: FeaturedProduct,
  products: Product[],
}

export interface FeaturedProduct extends BaseProduct {
  quote: string,
}

export interface Product extends BaseProduct {
  id: number,
  description: string,
  price: string,
  storeDescription: string,
  featured: boolean,
}

export interface BaseProduct {
  title: string,
  imageUrl: string,
  storeName: string,
  storeAvatarUrl: string,
  price: string
}
