"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/Common/ScrollReveal";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <ScrollReveal />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: 'rgba(255, 255, 255, 0.98)',
              color: '#374151',
              border: '1px solid rgba(209, 213, 219, 0.3)',
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              backdropFilter: 'blur(15px)',
              zIndex: 9999999,
              fontSize: '14px',
              fontWeight: '500',
              maxWidth: '400px',
              padding: '16px 20px',
            },
            success: {
              iconTheme: {
                primary: '#10B981',
                secondary: '#fff',
              },
              style: {
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#065F46',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#fff',
              },
              style: {
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#991B1B',
              },
            },
            loading: {
              iconTheme: {
                primary: '#3B82F6',
                secondary: '#fff',
              },
              style: {
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                color: '#1E40AF',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
