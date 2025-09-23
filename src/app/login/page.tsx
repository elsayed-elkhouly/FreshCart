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
import { LoginSchame, LoginSchameType } from "@/shcema/LoginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from "sonner"
const Login = () => {
  const [loding, setloding] = useState(false)
  const format = useForm<LoginSchameType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchame)
  })

  async function sigin(value: LoginSchameType) {
    setloding(true)
    try {
      setloding(true)
      const data = await signIn("credentials", {
        email: value.email,
        password: value.password,
        callbackUrl: "/",
        redirect: false
      })
      if (data?.ok) {

        toast.success("login success", {
          position: "top-center",
          duration: 1500
        })
        window.location.href = data.url || "/"
      }else{
         toast.error("Incorrect email or password", {
          position: "top-center",
          duration: 1500
        })
      }
    }
    catch (error) {
    }
    setloding(false)
  }
  return (
    <div className='my-6 mx-auto w-full md:w-1/2 px-2'>
      <h2 className='text-3xl fa-bold text-center'  > Login form</h2>
      <title>Login</title>
      <Form {...format}>
        <form onSubmit={format.handleSubmit(sigin)}>
          <FormField
            control={format.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Email </FormLabel>
                <FormControl>
                  <Input type="email"  {...field} />
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
                  <Input type="password"  {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className=" w-full  mx-auto text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
            {loding ? <i className="fa-spin fa-spinner fa-solid text-white "></i> : <p>login</p>}
          </button>
        </form>
      </Form>
    </div>
  )
}

export default Login