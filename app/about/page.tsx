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
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
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
