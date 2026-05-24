import { ImageResponse } from "next/og";

export const alt = "SolidChange — обмен криптовалют без скрытых комиссий";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background:
            "linear-gradient(135deg, #1a0f14 0%, #2a1620 55%, #3a1f2b 100%)",
          color: "#f5ede4",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: brand lockup */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <svg
            width="56"
            height="56"
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
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#f5ede4" }}>Solid</span>
            <span style={{ color: "#e8c9a0" }}>Change</span>
          </div>
        </div>

        {/* Middle: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 880,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 18,
              color: "#9a8e86",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                background: "#7fb28a",
              }}
            />
            Среднее время обмена ~7 минут
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: "-0.022em",
            }}
          >
            <span style={{ color: "#f5ede4" }}>Обмен криптовалют</span>
            <span style={{ color: "#e8c9a0" }}>без скрытых комиссий</span>
          </div>
        </div>

        {/* Bottom: trust strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#9a8e86",
          }}
        >
          <div style={{ display: "flex", gap: 36 }}>
            <span>Резервы on-chain</span>
            <span>AML-проверка</span>
            <span>Лицензия ЕС</span>
          </div>
          <div style={{ display: "flex", color: "#5e534d", fontSize: 18 }}>
            solidchange.online
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
