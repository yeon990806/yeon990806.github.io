import "./globals.css";
import 'dayjs/locale/ko';
import type { Metadata } from "next";
import dayjs from 'dayjs';
import BlogHeader from "@/components/layout/BlogHeader";
import BlogFooter from "@/components/layout/BlogFooter";
import ThemeProvider from "@/components/ThemeProvider";
import GoogleAnalytics from "@/components/GA";

dayjs.locale('ko');

export const metadata: Metadata = {
  title: "YeON.me",
  description: "",
  keywords: "",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-my-20 scroll-smooth" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen transition ease-in-out font-Pretendard bg-light-background dark:bg-dark-background">
        <GoogleAnalytics />
        <ThemeProvider>
          <BlogHeader />
          <main className="mt-[64px] flex flex-1 pt-4 pb-12 flex-col">
            {children}
          </main>
          <BlogFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
