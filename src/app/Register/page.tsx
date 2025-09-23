'use client'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RegisterSchame, RegisterSchameType } from "@/shcema/RegisterShcema"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useRouter } from "next/navigation"
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from "sonner"

const Register = () => {
  const format = useForm<RegisterSchameType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    resolver: zodResolver(RegisterSchame)
  })
 const Router = useRouter()
async function register(value: RegisterSchameType) {
    try {
      const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',value)
      console.log(data);
      toast.success(data.message,{
        position:"top-center"
        
      })  
      Router.push("/login")   
    } catch (error) {
      
       toast.error(error.response.data.message,{
        position:"top-center"
      }) 
    }

  }
  return (
    <div className='my-6 mx-auto w-full md:w-1/2 px-2'>
      <h2 className='text-3xl fa-bold text-center'  > Register form</h2>
<title>Resgister</title>
      <Form {...format}>
        <form onSubmit={format.handleSubmit(register)}>
          <FormField
            control={format.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Name </FormLabel>
                <FormControl>
                  <Input type="text"  {...field} placeholder='Enter your name'/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={format.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Email </FormLabel>
                <FormControl>
                  <Input type="email"  {...field} placeholder='Enter your email'/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={format.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel> password </FormLabel>
                <FormControl>
                  <Input type="password"  {...field} placeholder='Enter your password'/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={format.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel> rePassword </FormLabel>
                <FormControl>
                  <Input type="password"  {...field} placeholder='Enter your rePassword'/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={format.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel> phone </FormLabel>
                <FormControl>
                  <Input type="tel"  {...field} placeholder='Enter your phone'/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className=" w-full mt-2  mx-auto text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-3">
            Register Now
          </button>
        </form>
      </Form>
    </div>
  )
}

export default Register