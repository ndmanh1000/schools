import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import ContactDs from "@/components/Contact/ContactDs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ DSchool để nhận tư vấn giải pháp và demo miễn phí",
  description: "Liên hệ ngay ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Liên hệ"
        description="Chúng tôi rất mong nhận được phản hồi từ bạn. Hãy liên hệ với chúng tôi qua các kênh dưới đây hoặc gửi tin nhắn trực tiếp qua biểu mẫu liên hệ."
      />

      {/* <Contact /> */}
      <ContactDs />
    </>
  );
};

export default ContactPage;
