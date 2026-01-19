import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    kpis: {
      weeklyRate: 78,
      currentStreak: 5,
      totalPoints: 640
    },
    weekly: [60, 80, 70, 90, 40, 100, 75]
  });
}
