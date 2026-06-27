import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFFFF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Remote Image for the K */}
        <img
          src="https://kast-ochre.vercel.app/logo.png"
          alt="K"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "contain",
          }}
        />

        {/* Black text for 'ast' - Font size reduced to 120 */}
        <div
          style={{
            fontSize: 120, // Reduced from 200
            fontWeight: 900,
            color: "#000000",
            marginLeft: "10px",
            marginTop: "30px", // Adjusted top margin to align with the K
            letterSpacing: "-0.05em",
          }}
        >
          ast
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}