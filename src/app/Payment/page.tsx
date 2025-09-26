"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Cartcontext } from '@/context/cartContext'
import React, { useContext, useRef, useState } from 'react'
import { Cashorder } from '../PaymentAction/Cashorder'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { OnlineOrder } from '../PaymentAction/Onlineorder'

const Payment = () => {
    const [isloding, setisloding] = useState(false)
    const context = useContext(Cartcontext)
    if (!context) {
        throw new Error("Cartcontext must be used within a CartProvider");
    }
    const {cartid, clearAllCart } = context;
    console.log(cartid);
    
    const details = useRef<HTMLInputElement>(null);
    const phone = useRef<HTMLInputElement>(null);
    const City = useRef<HTMLInputElement>(null);
    const router = useRouter()
    async function onlinepayment() {
        const values = {
            shippingAddress: {
                details: details.current?.value,
                phone: phone.current?.value,
                city: City.current?.value,
            }
        }
        try {
            const data = await OnlineOrder(cartid, values)
            if (data.status === "success") {
                window.location.href = data.session.url
            }
            toast.success(data.status, {
                position: 'top-center',
                duration: 15000
            })
            return data
        } catch (error) {
            console.log(error);
        }
    }
    async function cashpayment() {
        const values = {
            shippingAddress: {
                details: details.current?.value,
                phone: phone.current?.value,
                city: City.current?.value
            }
        }
        setisloding(true)
        try {
            const data = await Cashorder(cartid, values)
            console.log(data);
            toast.success(data.status, {
                position: 'top-center',
                duration: 15000
            })
            clearAllCart()
            router.push("/allorders")
        } catch (error) {
            console.log(error);
        }
        setisloding(false)
    }
    return (
        <div className='w-full md:w-1/2 mx-auto my-10 px-5 md:px-0'>
            <title>Payment</title>
            <h1 className='mb-10 text-3xl text-center font-bold'>payment</h1>
            <label htmlFor="detials"> Details</label>
            <Input ref={details} className='mb-4' type='text' id='detials'></Input>

            <label htmlFor="Phone"> Phone</label>
            <Input ref={phone} className='mb-4' type='text' id='Phone'></Input>

            <label htmlFor="City"> City</label>
            <Input ref={City} type='text' id='City'></Input>

            <div className='mt-3'><Button onClick={cashpayment} className='me-3 cursor-pointer'> {isloding ? <i className="fa-spin fa-spinner fa-solid text-white "></i> : "Cash Payment"}</Button>
                <Button onClick={onlinepayment} className='cursor-pointer'> Online  Payment</Button></div>
        </div>
    )
}

export default Payment