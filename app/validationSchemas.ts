import {z} from 'zod'

 const issueSchema= z.object({
    title: z.string().min(2, 'Title is required.').max(255),
    description: z.string().min(2, 'Description is required.')
})

export {
    issueSchema,
}