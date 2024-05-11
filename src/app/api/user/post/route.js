import { NextNextRequest, NextResponse } from "next/server";
import prisma from "@/DB/db.config";
import { authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function GET(NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ status: 401, message: "Un-Authorized" });
  }

  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
        },
      },
      Likes: {
        where: {
          user_id: Number(session?.user?.id),
        },
      },
    },
    where: {
      user_id: Number(session?.user?.id),
    },
    orderBy: {
      id: "desc",
    },
  });

  return NextResponse.json({
    status: 200,
    data: posts,
  });
}
