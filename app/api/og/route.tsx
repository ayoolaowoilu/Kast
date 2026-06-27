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
        {/* The 'K' 3D effect */}
        <div
          style={{
            fontSize: 220,
            fontWeight: 900,
            color: "#FFFFFF",
            textShadow: "10px 10px 0px #B91C1C",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          K
        </div>

        {/* Brand Name */}
        <div style={{ fontSize: 80, fontWeight: 900, color: "#FFFFFF" }}>
          kast
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 36, fontWeight: 600, color: "#FECACA", marginTop: "10px" }}>
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