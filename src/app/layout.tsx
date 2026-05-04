import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { DarkRiveBackground } from "@/components/dark-rive-background";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anurag — Designer",
  description:
    "I'm a designer working with startups to shape products and experiences that feel alive through motion, detail, and a little obsession.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <DarkRiveBackground />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
