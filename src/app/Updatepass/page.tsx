"use client"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ChangePassSchema, ChangePassSchemaType } from '@/shcema/CahngepassSchema'
import { getmytoken } from '@/utilites/token'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { signOut } from 'next-auth/react'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const UpdatePass = () => {

 const [isloding,setIsloding] = useState(false)

  const format = useForm<ChangePassSchemaType>({
    defaultValues: {
      currentPassword: "",
      password: "",
      rePassword: "",

    },
    resolver: zodResolver(ChangePassSchema)
  })
  async function changePass(value: ChangePassSchemaType) {
   
    const token = await getmytoken()
    setIsloding(true)
    try {
      const { data } = await axios.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword', value, {
        headers: {
          token: token as string
        }
      })
      console.log(data);
      setIsloding(true)
      toast.success(data.message, {
        position: "top-center"

      })
      signOut({ callbackUrl: "/login" })
     
    }catch (error) {
      setIsloding(false)
  const err = error as AxiosError<{ message: string }>;
  toast.error(err.response?.data?.message ?? "Something went wrong", {
    position: "top-center",
  });
}
   
  }
  return (
    <div className='mt-10 mx-auto w-full md:w-1/2 px-2 '>
      <title>Update Password</title>
      <h2 className='text-3xl fa-bold text-center'  > Update Password</h2>

      <Form {...format} >
        <form onSubmit={format.handleSubmit(changePass)} className='my-10'>
          <FormField
            control={format.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='my-1'>currentPassword  </FormLabel>
                <FormControl>
                  <Input type="password"  {...field} placeholder='Enter your curruntPassword' />
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
                <FormLabel className='my-1'> password </FormLabel>
                <FormControl>
                  <Input type="password"  {...field} placeholder='Enter your new paswword' />
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
                <FormLabel className='my-1'> rePassword </FormLabel>
                <FormControl>
                  <Input type="password"  {...field} placeholder='Enter your repassword' className='mb-5' />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className=" w-full mt-5  mx-auto text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
            {isloding?<i className="fa-spin fa-spinner fa-solid text-white "></i>:"Change Now"}
          </button>
        </form>
      </Form>
    </div>
  )
}

export default UpdatePass