import { NextResponse } from "next/server";

export const dynamic = "force-static";

const telemetry = {
  source: "repository-simulation",
  live: false,
  status: "OPERATIONAL",
  faults: 0,
  coverage: 0.86,
  updatedAt: "2026-09-04T00:00:00.000Z",
  note: "Demo contract only. Replace with measured hardware/service telemetry before treating values as live.",
};

export function GET() {
  return NextResponse.json(telemetry, {
    headers: {
      "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
