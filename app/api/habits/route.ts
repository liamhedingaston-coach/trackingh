import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  const habits = await prisma.habit.findMany({ take: 50 });
  return NextResponse.json(habits);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { workspaceId, name, icon, color } = body;

  if (!workspaceId || !name) {
    return NextResponse.json({ error: "workspaceId et name requis." }, { status: 400 });
  }

  const habit = await prisma.habit.create({
    data: {
      workspaceId,
      name,
      icon: icon || "🎯",
      color: color || "#5b6cff"
    }
  });

  return NextResponse.json(habit, { status: 201 });
}
