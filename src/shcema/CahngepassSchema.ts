import * as z from "zod";
export  const ChangePassSchema = z.object({
currentPassword:z.string(),
    password: z.string(),
    rePassword: z.string(),
    
  }).refine(function(value){
    if(value.password === value.rePassword){
      return true
    }
    return false
  },{
  message: "Passwords don't match",
  path: ["rePassword"],
})

export type ChangePassSchemaType=z.infer<typeof ChangePassSchema >