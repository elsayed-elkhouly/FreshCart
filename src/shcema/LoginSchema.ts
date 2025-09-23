import * as z from "zod";
export  const LoginSchame = z.object({
    email: z.email("invailed email"),
    password: z.string(),

  })

export type LoginSchameType=z.infer<typeof LoginSchame >