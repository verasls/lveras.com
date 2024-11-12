import { Geist } from "next/font/google";
import CommandMenu from "@/components/command-menu";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={geist.className} suppressHydrationWarning>
        <body className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-background">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
            <Footer />

            <CommandMenu />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
