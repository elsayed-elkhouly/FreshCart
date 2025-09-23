"use client"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ChangePassSchema, ChangePassSchemaType } from '@/shcema/CahngepassSchema'
import { ChangeDataSchema, ChangeDataSchemaType } from '@/shcema/ChangeDataSchcema'
import { getmytoken } from '@/utilites/token'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'

import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const UpdateUser = () => {


    const format = useForm<ChangeDataSchemaType>({
        defaultValues: {
            name: "",
            email: "",
            phone: ""

        },
        resolver: zodResolver(ChangeDataSchema)
    })
    async function changeData(value: ChangeDataSchemaType) {
        const token = await getmytoken()
        try {
            const { data } = await axios.put('https://ecommerce.routemisr.com/api/v1/users/updateMe/', value, {
                headers: {
                    token: token as string
                }
            })
            console.log(data);

            toast.success(data.message, {
                position: "top-center"

            })
        } catch (error) {
  const err = error as AxiosError<{ message: string }>;
  toast.error(err.response?.data?.message ?? "Something went wrong", {
    position: "top-center",
  });
}

    }
    return (
        <div className='mt-6 mx-auto w-full md:w-1/2 px-2 '>
          <title>Update data</title>
            <h2 className='text-3xl fa-bold text-center'  > Update User</h2>

            <Form {...format}>
                <form onSubmit={format.handleSubmit(changeData)}>
                <FormField
                  control={format.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Name </FormLabel>
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
                      <FormLabel>New Email </FormLabel>
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
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>New phone </FormLabel>
                                <FormControl>
                                  <Input type="tel"  {...field} placeholder='Enter your phone'/>
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                    <button type="submit" className=" w-full my-5  mx-auto text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 ">
                        Submit Change
                    </button>
                </form>
            </Form>
        </div>
    )
}

export default UpdateUser