import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { createSession, hashPassword } from "../../../../lib/auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return NextResponse.json({ error: "Email et mot de passe requis." }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    return NextResponse.json({ error: "Email déjà utilisé." }, { status: 409 });
  }

  const passwordHash = await hashPassword(password);
  const user = await prisma.user.create({ data: { email, passwordHash } });

  await prisma.workspace.create({
    data: {
      name: "Mon espace",
      ownerUserId: user.id
    }
  });

  createSession(user.id);
  return NextResponse.redirect(new URL("/onboarding", request.url));
}
