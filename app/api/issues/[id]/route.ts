import { issueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
    request: NextRequest,
    {params}: {params: {id:string}} ){
const body = await request.json()
    const issueValidation = issueSchema.safeParse(body)
    if(!issueValidation.success)
        return NextResponse.json(issueValidation.error.errors, {status: 400})
    
    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(params.id)}
    });

    if(!issue)
        return NextResponse.json({error: 'Not found'}, {status: 404})

    const updatedIssue = await prisma.issue.update({
        where: {id: issue.id},
        data: {
            title: body.title,
            description: body.description
           }
    })
    return NextResponse.json(updatedIssue)
}