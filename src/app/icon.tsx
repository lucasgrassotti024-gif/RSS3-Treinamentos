import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
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
          background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
          borderRadius: "8px",
          border: "1px solid rgba(59, 130, 246, 0.4)",
          position: "relative",
        }}
      >
        {/* Símbolo do Capelo em Laranja RSS3 */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f97316"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" fill="#f97316" fillOpacity="0.25" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
