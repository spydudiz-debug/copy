import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** App icon / favicon — gradient mark matching public/logo.svg */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563eb 0%, #6366f1 50%, #a855f7 100%)",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            width: 14,
            height: 11,
            border: "2px solid rgba(255,255,255,0.95)",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
              borderLeft: "6px solid white",
              marginLeft: 2,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
