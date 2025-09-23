import * as z from "zod";
export const ChangeDataSchema = z.object({
    name: z.string().min(3, "min lentgh 3").max(20, "max lentgh 15"),
    email: z.email("invailed email"),
    phone: z.string(),
})

export type ChangeDataSchemaType = z.infer<typeof ChangeDataSchema>