import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutHeader from "@/components/About/AboutHeader";
import AboutSuccessStory from "@/components/About/AboutSuccessStory";
import { Metadata } from "next";
import AboutMissionVision from "@/components/About/AboutMissionVision";
import AboutCoreValues from "@/components/About/AboutCoreValues";
import AboutDevelopment from "@/components/About/AboutDevelopment";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "DSchool phát triển từ lõi Blue Rise, tùy biến cho giáo dục, mang đến giải pháp quản lý, giảng dạy và kết nối dữ liệu hiện đại, an toàn",
  description: "DSchool – giải pháp chuyển đổi số giáo dục hiện đại, minh bạch, an toàn",
  // other metadata
};

const AboutPage = () => {
  return (
    <>

      <AboutHeader />
      <AboutSuccessStory />
      <AboutMissionVision />
      <AboutCoreValues />
      <AboutDevelopment />
      <Contact />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
