import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexura Web | Premium Experience",
  description: "Next-generation web application powered by Nexura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#000' }}>
        {children}
      </body>
    </html>
  );
}
