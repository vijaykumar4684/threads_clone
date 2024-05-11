import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function GET(NextRequest) {
  const session= await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ status: 401, message: "Un-Authorized" });
  }

  const comments = await prisma.comment.findMany({
    where: {
      user_id: Number(session.user?.id),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
        },
      },
    },
  });

  return NextResponse.json({ status: 200, data: comments });
}
