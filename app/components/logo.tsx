


export default function Logo(){
     
    return   <div
        style={{
          display: "flex",
          flexDirection: "row", 
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Remote Image for the K */}
        <img
          src="/logo.png"
          alt="K"
          style={{
            width: "25px",
            height: "25px",
            objectFit: "contain",
          }}
        />

        {/* Black text for 'ast' */}
        <div
          style={{
            fontSize: 25,
            fontWeight: 900,
            color: "#fff", // Black text
            marginLeft: "5px",
            letterSpacing: "-0.05em",
            
          }}
        >
          ast
        </div>
      </div>
}