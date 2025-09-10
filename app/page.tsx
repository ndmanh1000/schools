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
import { Metadata } from "next";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import NotificationTest from "@/components/Test/NotificationTest";


export const metadata: Metadata = {
  title: "DSchool - Nền Tảng Dành Cho Trường Học Số",
  description: "DSchool là nền tảng dành cho trường học số, giúp bạn quản lý dữ liệu tập trung giúp bạn tổ chức, truy cập và phân tích dữ liệu một cách hiệu quả.",
  // other metadata
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

      {/* Test Notification - Remove this after testing */}


    </>
  );
}
