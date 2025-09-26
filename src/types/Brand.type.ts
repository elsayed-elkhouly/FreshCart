export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
export interface ShippingValues {
  shippingAddress: {
    details: string;
    phone: string;
    city: string;
  };
}