import { AxiosResponse } from "axios"
import { Wishproduct } from "./wishlist.type"

export interface Cart {
  status: string
  numOfCartItems: number
  cartId: string
  data: Data
}

export interface Data {
  _id: string
  cartOwner: string
  products: CartProduct[]
  createdAt: string
  updatedAt: string
  __v: number
  totalCartPrice: number
}

export interface CartProduct {
  count: number
  _id: string
  product: Product2
  price: number
}

export interface Product2 {
  subcategory: Subcategory[]
  _id: string
  title: string
  quantity: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  id: string
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}
export interface CartContextType {
  numOfCartItems: number;
  Products: CartProduct[]; // هنا خليها النوع اللي انت معرفه للمنتجات
  totalPrice: number;
  removeCartItem: (id: string) => void;
  CartUpdate: (id: string, count: number) => void;
  clearAllCart: () => void;
  Addtocart: (id: string) => any; // تقدر تغيّر any للـ type اللي addtocartAction بيرجّعه
  wishproducct: Wishproduct[];
  Addtowishlist: (id: string) => Promise<Cart>;        // لو عندك type محدد للـ wishlist رجّعه هنا
  deletwishitem: (id: string) =>Promise<AxiosResponse<Wishproduct>>;
   numofwishitem: number;     // عدد عناصر الـ wishlist
  cartid: string;            // cart id
 

}