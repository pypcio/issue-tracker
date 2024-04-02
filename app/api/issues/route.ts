import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "./schema";
import prisma from '@/prisma/client';
export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = issueSchema.safeParse(body);

    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})
    //add new issue
    const newIssue= await prisma.issue.create({
       data: {
        title: body.title,
        description: body.description
       }
    })

    return NextResponse.json(newIssue, {status: 201})
}