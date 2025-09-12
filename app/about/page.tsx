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
import Video from "@/components/Video";

export const metadata: Metadata = {
  title: "DSchool – giải pháp chuyển đổi số giáo dục hiện đại, minh bạch, an toàn",
  description: "DSchool – số hóa giáo dục hiệu quả, minh bạch và an toàn",
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
      <Video />
      <Contact />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
