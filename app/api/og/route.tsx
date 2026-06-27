import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#EF4444",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Consolidated Logo: "kast" with 3D effect */}
        <div
          style={{
            fontSize: 200,
            fontWeight: 900,
            color: "#FFFFFF",
            // The hard red shadow to create the 3D effect across the full word
            textShadow: "12px 12px 0px #B91C1C",
            letterSpacing: "-0.05em",
            marginBottom: "30px",
          }}
        >
          kast
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: "#FFFFFF", // Changed to white for better readability
            opacity: 0.9,
            letterSpacing: "-0.02em",
          }}
        >
          Stream together. No matter where.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}