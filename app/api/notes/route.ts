import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { workspaceId, date, text } = body;

  if (!workspaceId || !date) {
    return NextResponse.json({ error: "workspaceId et date requis." }, { status: 400 });
  }

  const note = await prisma.dailyNote.create({
    data: {
      workspaceId,
      date: new Date(date),
      text: text || ""
    }
  });

  return NextResponse.json(note, { status: 201 });
}
