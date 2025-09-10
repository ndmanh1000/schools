import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FeatureHead from "@/components/Features/FeatureHead";
import FeatureMainn from "@/components/Features/FeatureMainn";
import FeatureOutstanding from "@/components/Features/FeatureOutstanding";
import Brands from "@/components/Brands";
import FeatureFaq from "@/components/Features/FeatureFaq";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tính năng | DSchool - Nền Tảng Dành Cho Trường Học Số",
  description: "DSchool là nền tảng dành cho trường học số, giúp bạn quản lý dữ liệu tập trung giúp bạn tổ chức, truy cập và phân tích dữ liệu một cách hiệu quả.",
  // other metadata
};

const Feature = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Tính năng"
        description="Khám phá các tính năng nổi bật của DSchool, nền tảng quản lý dữ liệu tập trung giúp bạn tổ chức, truy cập và phân tích dữ liệu một cách hiệu quả."
      /> */}

      <section className="pb-[120px] pt-[120px]">
        <div className="container">


          <FeatureHead />
          <FeatureMainn />
          <FeatureOutstanding />
          <Brands />
          <FeatureFaq />
        </div>
      </section>
    </>
  );
};

export default Feature;
