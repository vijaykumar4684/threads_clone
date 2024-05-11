import prisma from "@/DB/db.config";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function GET(NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ status: 401, message: "Un-Authorized" });
  }
  const query = NextRequest.nextUrl.searchParams.get("query");
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query ?? "",
            mode: "insensitive",
          },
        },
        {
          username: {
            contains: query ?? "",
            mode: "insensitive",
          },
        },
      ],
      NOT: {
        id: Number(session.user?.id),
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
    },
  });

  return NextResponse.json({ status: 200, data: users });
}
