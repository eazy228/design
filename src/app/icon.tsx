import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#0b0608",
          borderRadius: 7,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.25"
            y="1.25"
            width="29.5"
            height="29.5"
            rx="7.5"
            stroke="#e8c9a0"
            strokeOpacity="0.55"
            strokeWidth="1.2"
          />
          <path
            d="M22.5 9.5C19.5 7.5 12 7.5 9.5 12.5C7 17.5 9 22.5 14 24C18 25.2 21.5 23.5 23.5 21"
            stroke="#e8c9a0"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M19 13.5C17 12.8 13.5 13.2 13.5 15.2C13.5 17 17 17 18.5 17.5C20 18 20 20 18 20.6C16 21.2 13 20.8 12.5 20"
            stroke="#e8c9a0"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
