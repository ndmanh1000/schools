"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const reasons = [
    {
      title: "Tùy biến cho trường học",
      desc: "Phát triển từ Blue Rise, DSchool được tối ưu để quản lý hồ sơ, lớp học, báo cáo đúng chuẩn Bộ/Sở.",
    },
    {
      title: "Kết nối cơ sở dữ liệu ngành",
      desc: "Tích hợp trực tiếp với cơ sở dữ liệu Bộ/Sở Giáo dục, đồng bộ báo cáo nhanh và chính xác.",
    },
    {
      title: "Quản lý tập trung",
      desc: "Vận hành toàn bộ trường học trên một nền tảng duy nhất, giảm giấy tờ, tăng hiệu quả.",
    },
    {
      title: "Hỗ trợ dạy & học số",
      desc: "LMS tích hợp cho phép tinh giản công tác giảng dạy, tổ chức thi trực tuyến; phụ huynh theo dõi tiến độ và học phí minh bạch.",
    },
    {
      title: "Triển khai nhanh – Hỗ trợ 24/7",
      desc: "Đội ngũ am hiểu công nghệ và giáo dục. Tích hợp AI tăng tốc số hóa vượt trội, hỗ trợ kỹ thuật liên tục, đảm bảo nhà trường vận hành trơn tru.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedReason = reasons[selectedIndex];

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="5 lý do nên chọn DSchool"
          paragraph="DSchool là giải pháp quản lý trường học toàn diện, giúp bạn tiết kiệm thời gian, nâng cao hiệu quả và tối ưu hóa quy trình vận hành."
          center
          mb="60px"
        />

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {reasons.map((reason, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`rounded-full border px-4 py-2 text-sm transition-all md:text-base
                ${
                  selectedIndex === index
                    ? "border-primary bg-primary text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary"
                }`}
            >
              {reason.title}
            </button>
          ))}
        </div>

        {/* Animated Reason Display */}
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-lg border border-[#8a92a1] bg-white p-6 shadow-md"
            >
              <h4 className="mb-3 text-xl font-semibold text-primary">
                {selectedReason.title}
              </h4>
              <p className="text-gray-600">{selectedReason.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Background Shape */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
