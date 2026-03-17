"use client";
import dynamic from "next/dynamic";

const StudioClient = dynamic(() => import("./StudioClient"), { ssr: false });

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(200,168,75,0.12)",
  padding: "18px 22px",
  marginBottom: 12,
  display: "flex",
  gap: 16,
};

const STEPS = [
  {
    num: "01",
    title: "Create a free Sanity project",
    body: 'Go to sanity.io, sign in, create a new project. Name it "Rev Dokun Idowu" and set dataset to "production".',
    href: "https://sanity.io",
    cta: "Open sanity.io",
  },
  {
    num: "02",
    title: "Copy your Project ID",
    body: "In the Sanity dashboard, your Project ID is shown at the top of the page. It looks like: abc123de",
    href: "https://sanity.io/manage",
    cta: "Open sanity.io/manage",
  },
  {
    num: "03",
    title: "Add env var to Vercel",
    body: "Go to Vercel project > Settings > Environment Variables. Add: NEXT_PUBLIC_SANITY_PROJECT_ID with your project ID as the value.",
    href: "https://vercel.com",
    cta: "Open Vercel",
  },
  {
    num: "04",
    title: "Allow CORS in Sanity",
    body: "In sanity.io/manage, go to your project > API > CORS Origins > Add your Vercel URL. Tick Allow credentials and save.",
    href: "https://sanity.io/manage",
    cta: "Open CORS settings",
  },
  {
    num: "05",
    title: "Redeploy on Vercel",
    body: "Go to Vercel > Deployments > click the 3 dots on the latest deployment > Redeploy. Then come back to /studio.",
    href: null,
    cta: null,
  },
];

function SetupGuide() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1a1008",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 560, width: "100%" }}>
        <p
          style={{
            color: "#C8A84B",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            margin: "0 0 8px",
          }}
        >
          Rev. Dokun Idowu - CMS
        </p>

        <h1
          style={{
            color: "#F5EFE0",
            fontSize: 26,
            fontWeight: 700,
            margin: "0 0 12px",
            lineHeight: 1.2,
          }}
        >
          Studio Setup Required
        </h1>

        <div
          style={{ width: 40, height: 2, background: "#C8A84B", marginBottom: 28 }}
        />

        <div
          style={{
            background: "rgba(196,98,45,0.12)",
            borderLeft: "3px solid #C4622D",
            padding: "14px 18px",
            marginBottom: 28,
          }}
        >
          <p style={{ color: "#F5EFE0", fontSize: 13, margin: 0, lineHeight: 1.6 }}>
            <strong>NEXT_PUBLIC_SANITY_PROJECT_ID</strong> is not set. The CMS
            Studio cannot open without a valid Sanity Project ID in your Vercel
            environment variables.
          </p>
        </div>

        {STEPS.map((step) => (
          <div key={step.num} style={cardStyle}>
            <span
              style={{
                color: "#C8A84B",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                minWidth: 26,
                paddingTop: 2,
                flexShrink: 0,
              }}
            >
              {step.num}
            </span>
            <div>
              <p
                style={{
                  color: "#F5EFE0",
                  fontWeight: 600,
                  fontSize: 14,
                  margin: "0 0 5px",
                }}
              >
                {step.title}
              </p>
              <p
                style={{
                  color: "rgba(245,239,224,0.5)",
                  fontSize: 12,
                  lineHeight: 1.7,
                  margin: "0 0 7px",
                }}
              >
                {step.body}
              </p>
              {step.href && (
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#C8A84B",
                    fontSize: 12,
                    textDecoration: "none",
                  }}
                >
                  {step.cta} &rarr;
                </a>
              )}
            </div>
          </div>
        ))}

        <p
          style={{
            color: "rgba(245,239,224,0.2)",
            fontSize: 11,
            textAlign: "center",
            marginTop: 28,
            letterSpacing: "0.05em",
          }}
        >
          Once set up, this page will load the full Sanity Studio CMS.
        </p>
      </div>
    </div>
  );
}

export default function StudioPage() {
  if (!PROJECT_ID) {
    return <SetupGuide />;
  }
  return <StudioClient />;
}
