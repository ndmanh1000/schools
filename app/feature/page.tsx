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
  title: "DSchool tích hợp LMS, khảo thí, tuyển sinh, kế toán và kết nối dữ liệu ngành. Một nền tảng, đầy đủ công cụ quản lý trường học thông minh",
  description: "LMS, khảo thí, tuyển sinh, kế toán – tất cả trong một nền tảng DSchool",
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
