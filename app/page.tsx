import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionFour from "@/components/About/AboutSectionFour";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSchool – giải pháp chuyển đổi số toàn diện, kết nối Bộ – Trường – Gia đình",
  description: "DSchool – giải pháp chuyển đổi số toàn diện, minh bạch và an toàn",
  openGraph: {
    title: "DSchool – giải pháp chuyển đổi số toàn diện, kết nối Bộ – Trường – Gia đình",
    description: "Nền tảng DSchool kết nối Bộ – Trường – Gia đình, tích hợp LMS, khảo thí, tuyển sinh và kế toán.",
    url: "https://www.dschool.vn",
    siteName: "DSchool",
    images: [
      {
        url: "/thumbnail-.jpg", // Đường dẫn đúng
        width: 1200,
        height: 630,
        alt: "DSchool – chuyển đổi số giáo dục",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSchool – giải pháp chuyển đổi số toàn diện",
    description: "DSchool – nền tảng chuyển đổi số giáo dục hiện đại, an toàn, kết nối đa bên.",
    images: ["/thumbnail-.jpg"], // Đường dẫn đúng
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
      <Video />
      <Brands />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
