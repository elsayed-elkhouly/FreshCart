import { getToken } from 'next-auth/jwt'
import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

     const {pathname}=request.nextUrl

    const token = await  getToken({req:request})

    const authoption =["/login","/Register"]
    const routs=["/","/UpdataUserdata", "/Updatepass","/allorders","/Brands","/Payment","/cart","/Categories","/Products","/ProductDetails","/WishList"]

    if (!token && routs.includes(pathname)) {
          return NextResponse.redirect(new URL('/login', request.url))

    }
    if (token&&authoption.includes(pathname)) {
          return NextResponse.redirect(new URL('/', request.url))

    }
  return NextResponse.next()
}
 
export const config = {
  matcher: ["/" ,"/UpdataUserdata", "/Updatepass","/allorders","/Payment","/Brands","/cart","/Categories","/Products","/ProductDetails","/WishList","/login","/Register"],
}