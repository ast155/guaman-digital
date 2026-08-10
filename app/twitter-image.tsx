import { ImageResponse } from "next/og";

export const alt = "Guaman Digital — Websites, Technology & Growth";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background:
            "radial-gradient(circle at 80% 15%, rgba(37,99,235,0.30), transparent 35%), #050505",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-1px",
          }}
        >
          <span>Guaman</span>
          <span style={{ color: "#3b82f6" }}>Digital.</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "950px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              lineHeight: 1,
              letterSpacing: "-4px",
              fontWeight: 700,
            }}
          >
            <span>Websites that move</span>
            <span>businesses forward.</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 25,
              color: "#a3a3a3",
            }}
          >
            Modern websites, digital solutions, and ongoing technology support.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#737373",
          }}
        >
          Websites. Technology. Growth.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
