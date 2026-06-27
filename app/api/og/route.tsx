import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFFFF", // White background
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row", // Horizontal layout for the logo parts
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

        {/* Black text for 'ast' */}
        <div
          style={{
            fontSize: 200,
            fontWeight: 900,
            color: "#000000", // Black text
            marginLeft: "10px",
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