import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Smart Closed-Loop HIFU Monitoring & Acoustic Response Therapy | Research Proposal",
  description:
    "Professional academic medical-technology proposal for smart closed-loop HIFU monitoring and acoustic response therapy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="deck-body">{children}</body>
    </html>
  );
}
