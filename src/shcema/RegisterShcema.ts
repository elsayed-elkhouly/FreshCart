
import * as z from "zod";
export  const RegisterSchame = z.object({
    name: z.string().min(3, "min lentgh 3").max(20, "max lentgh 15"),
    email: z.email("invailed email"),
    password: z.string(),
    rePassword: z.string(),
     phone:z.string(),
  }).refine(function(value){
    if(value.password === value.rePassword){
      return true
    }
    return false
  },{
  message: "Passwords don't match",
  path: ["rePassword"],
})

export type RegisterSchameType=z.infer<typeof RegisterSchame >