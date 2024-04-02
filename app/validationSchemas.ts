import {z} from 'zod'

 const issueSchema= z.object({
    title: z.string().min(2).max(255),
    description: z.string().min(2)
})

export {
    issueSchema,
}