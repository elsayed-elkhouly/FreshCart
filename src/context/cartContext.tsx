"use client"
import { addtocartAction } from '@/app/CarAction/AddtoCart'
import { Clearcart } from '@/app/CarAction/clearCart'
import { getuserCart } from '@/app/CarAction/getuserCart'
import { Removeitem } from '@/app/CarAction/removeCartitem'
import { udateItemCount } from '@/app/CarAction/updatecartcount'
import { detUserOrders } from '@/app/PaymentAction/getuserorder'
import { AddtoList } from '@/app/wishlistaction/AddtoList'
import { Deleteitemlist } from '@/app/wishlistaction/deletiltemlist'
import { getuserwish } from '@/app/wishlistaction/getuserwish'
import { Cart, CartContextType } from '@/types/userCart.type'
import { wishlist, Wishproduct } from '@/types/wishlist.type'
import React, { createContext, useEffect, useState } from 'react'




export const Cartcontext = createContext<CartContextType | undefined>(undefined);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [numOfCartItems, setnumOfCartItems] = useState(0)
    const [Products, setProducts] = useState([])
    const [totalPrice, settotalPrice] = useState(0)

    const [wishproducct, setwishproducct] = useState([])
    const [numofwishitem, setofwishitem] = useState(0)
    const [cartid, setCartid] = useState("")



//  wishList

    async function Addtowishlist(id: string) {
        try {
            const data = await AddtoList(id)
            console.log(data);
            userwishlist()
            return data
        } catch (error) {
            console.log(error);

        }
    }
    async function deletwishitem(id: string) {
        try {
            const data: Wishproduct = await Deleteitemlist(id)
            userwishlist()
            return  data
        } catch (error) {
            console.log(error);
        }
        
    }

    async function userwishlist() {
        try {
            const data  = await getuserwish()
             const dataa :wishlist= data.data
            setwishproducct(data.data)
            setofwishitem(data.count)
            setCartid(data.data.id)
            return data
        } catch (error) {
            console.log(error);

        }
    }
    // cart

    async function CartUpdate(id: string, count: number) {
       
        try {
            const data= await udateItemCount(id, count)
                const dataa :Cart= data.data
            setProducts(data.data.products)
            setnumOfCartItems(data.numOfCartItems)
            settotalPrice(data.data.totalCartPrice)
            
            return data
        } catch (error) {
            console.log(error);

        }

    }

    async function removeCartItem(id: string) {

        try {
            const data = await Removeitem(id)
          const dataa :Cart= data.data
            setProducts(data.data.products)
            setnumOfCartItems(data.numOfCartItems)
            settotalPrice(data.data.totalCartPrice)


        } catch (error) {
            console.log(error);

        }
    }

    async function Addtocart(id: string) {

        try {
            const data = await addtocartAction(id)
            userCart()
            console.log(data);
            return data
        } catch (error) {
            console.log(error);

        }
        
    }

    async function userCart() {
        
        try {
            const data= await getuserCart()
             const dataa :Cart= data.data
            setProducts(data.data.products)
            setnumOfCartItems(data.numOfCartItems)
            settotalPrice(data.data.totalCartPrice)
            setCartid(data.cartId)
            // console.log(data)
            return data
        } catch (error) {
            console.log(error);

        }

    }
    async function clearAllCart() {
        try {
            const data: Cart = await Clearcart()
            setProducts([])
            setnumOfCartItems(0)
            settotalPrice(0)
            setCartid("")
            userCart()
            return data
        } catch (error) {

        }
    }
    useEffect(function () {
        userCart();
        userwishlist();

    }, [])
    return (
        <Cartcontext.Provider value={
            {
                numOfCartItems,
                Products,
                totalPrice,
                Addtocart,
                removeCartItem,
                CartUpdate,
                clearAllCart,
                wishproducct,
                deletwishitem,
                numofwishitem,
                Addtowishlist,
                cartid

            }
        }>
            {children}

        </Cartcontext.Provider>
    )
}

export default ContextProvider