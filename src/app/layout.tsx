import "./globals.css";
import 'dayjs/locale/ko';
import type { Metadata } from "next";
import dayjs from 'dayjs';
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import ThemeProvider from "@/components/ThemeProvider";

dayjs.locale('ko');

export const metadata: Metadata = {
  title: "YeON.DEV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-my-20 scroll-smooth" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-Pretendard bg-light-background dark:bg-dark-background">
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
