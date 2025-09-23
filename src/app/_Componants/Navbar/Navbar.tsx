"use client"
import Image from "next/image"
import logo from "./../../../../public/freshcart-logo.svg"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { useContext } from "react"
import { Cartcontext } from "@/context/cartContext"
import { Badge } from "@/components/ui/badge"
import User from "../userdrobdown/User"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()

  const { status } = useSession()
  const context  = useContext(Cartcontext)
  if (!context) {
  throw new Error("Cartcontext must be used within a CartProvider");
}
const { numOfCartItems, numofwishitem }=context;

  return (
    <>
      <nav className="bg-gray-100 border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} alt="" />
          </Link>
          <div className="flex items-center md:order-2 space-x-3 ">

            {status === "authenticated" && <>
              <Link href={"/WishList"} className="relative">

                <i className="fa-regular fa-heart text-2xl relative pt-2 me-1.5 text-red-600"><Badge className="absolute -top-1 start-3   bg-red-500" >{numofwishitem}</Badge></i>
              </Link>
              <Link href={"/cart"} className="relative">
                <i className="fa-solid fa-cart-shopping text-2xl relative pt-2 "><Badge className="absolute -top-1 start-3   bg-green-500" >{numOfCartItems}</Badge></i>

              </Link>

              <User />


            </>}
            {status === "unauthenticated" && <>
              <Link href={"/login"}> Login</Link>
              <Link href={"/Register"}> Register</Link>
            </>}
          </div>
          <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col text-center font-bold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   md:bg-gray-100 ">

              {status === "authenticated" && <>
                <li>
                  <Link href={"/cart"}  className={
                    pathname.includes("/cart")
                      ? " px-3 text-green-500   "
                      : " px-3 text-black   hover:text-green-400"
                  }>


                    Cart</Link>
                </li>
                <li>

                  <Link href={"/WishList"} className={
                    pathname.includes("/WishList")
                      ? " px-3 text-green-500   "
                      : " px-3 text-black   hover:text-green-400"
                  }>WishList</Link>
                </li>
                <li>
                  <Link href={"/Products"} className={
                    pathname.includes("/Products")
                      ? " px-3 text-green-500   "
                      : " px-3 text-black   hover:text-green-400"
                  }>Product</Link>
                </li>
                <li>
                  <Link href={"/Categories"} className={
                    pathname.includes("/Categories")
                      ? " px-3 text-green-500   "
                      : " px-3 text-black   hover:text-green-400"
                  }>Categories</Link>
                </li>
                <li>
                  <Link href={"/Brands"} className={
                    pathname.includes("/Brands")
                      ? " px-3 text-green-500   "
                      : " px-3 text-black   hover:text-green-400"
                  }>Brands</Link>
                </li>
              </>}
              {status === "unauthenticated" && <>
              </>}
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar