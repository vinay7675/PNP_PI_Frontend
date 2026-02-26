export default function PrintFailed({ onTimeout }: { onTimeout?: () => void }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #EBF4FF 0%, #E0E7FF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
        
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F7F5EF",
          //borderRadius: "16px",
          //boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          
        }}
      >
        {/* Error Icon and Title */}
        <div class="scale-125" style={{ textAlign: "center", marginTop:"100px" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "#FEE2E2",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 12px",
              marginTop: "20px",
            }}
          >
            <svg
              style={{ width: "28px", height: "28px", color: "#DC2626" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h1
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#111827",
              margin: "0 0 8px 0",
            }}
          >
            Print Job Failed
          </h1>

          <p
            style={{
              fontSize: "13px",
              color: "#6B7280",
              margin: "0 0 16px 0",
            }}
          >
            Unfortunately, an error occurred and your print job could not be completed.
          </p>
        </div>

        {/* Support Information */}
        <div
          style={{
            width: "100%",
            background: " #FFBF00",
            borderRadius: "12px",
            padding: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#111827",
              margin: "0 0 12px 0",
              textAlign: "center",
            }}
          >
            Please Contact Support
          </h1>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            {/* Email */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#DBEAFE",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{ width: "18px", height: "18px", color: "#2563EB" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  Email
                </p>
                <a
                  href="mailto:support@paynprint.com"
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#2563EB",
                    textDecoration: "none",
                  }}
                >
                  support@paynprint.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#D1FAE5",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{ width: "18px", height: "18px", color: "#059669" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  Phone
                </p>
                <div>
                  <a
                    href="tel:+917675012905"
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#059669",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    +91 76750 12905
                  </a>
                  <a
                    href="tel:+916305840749"
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#059669",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    +91 63058 40749
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Auto-return message */}
        <p
          style={{
            fontSize: "11px",
            color: "#9CA3AF",
            margin: "10px",
            textAlign: "center",
          }}
        >
          Returning to home screen in 30 seconds...
        </p>
      </div>
    </div>
  );
}
