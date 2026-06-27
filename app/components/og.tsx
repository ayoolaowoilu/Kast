import { ImageResponse } from "next/og";



 const size = {
  width: 1200,
  height: 630,
};


export function Image() {
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
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 220,
              fontWeight: 900,
              color: "#FFFFFF",
              // The hard red shadow to create the 3D effect
              textShadow: "10px 10px 0px #B91C1C", 
              lineHeight: 1,
              marginBottom: "20px",
            }}
          >
            K
          </div>

          {/* Brand Name */}
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#FFFFFF",
            }}
          >
            kast
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              fontSize: 36,
              fontWeight: 600,
              color: "#FECACA", // Lighter red/pink for contrast
              letterSpacing: "-0.02em",
              marginTop: "10px",
            }}
          >
            Stream together. No matter where.
          </div>
        </div>
        
        {/* Subtle bottom border decoration */}
        <div 
          style={{ 
            position: "absolute", 
            bottom: 0, 
            left: 0, 
            right: 0, 
            height: "16px", 
            background: "#B91C1C" 
          }} 
        />
      </div>
    ),
    {
      ...size,
    }
  );
}