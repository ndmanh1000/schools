"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import { CommonModal, useModal } from "../Modal/CommonModal";
import { submitToGoogleSheetsAPI, FormData as GoogleSheetsFormData } from "../../lib/googleSheets";
import { showSuccess, showError, showInfo, showLoading, dismissToast } from "../Common/NotificationToast";

const Video = () => {
  const { isOpen: isRegisterModalOpen, openModal: openRegisterModal, closeModal: closeRegisterModal } = useModal();

  const handleRegisterClick = () => {
    console.log("Register button clicked!");
    openRegisterModal();
  };
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    let loadingToastId: string | undefined;

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone) {
        showError("Vui lòng điền đầy đủ thông tin bắt buộc (Họ tên, Email, Số điện thoại)", "Thiếu thông tin");
        return;
      }

      // Show loading notification
      loadingToastId = showLoading("Đang gửi thông tin...", "Vui lòng chờ");

      // Prepare data for Google Sheets
      const googleSheetsData: GoogleSheetsFormData = {
        name: formData.name,
        position: formData.position,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        message: formData.message,
        timestamp: new Date().toISOString(),
        source: "register"
      };

      // Submit to Google Sheets
      const success = await submitToGoogleSheetsAPI(googleSheetsData);

      if (success) {
        if (loadingToastId) dismissToast(loadingToastId);
        showSuccess("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ lại sớm nhất.", "Đăng ký thành công!");
        // Reset form
        setFormData({
          name: "",
          position: "",
          email: "",
          phone: "",
          organization: "",
          message: "",
        });
        closeRegisterModal();
      } else {
        if (loadingToastId) dismissToast(loadingToastId);
        showError("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.", "Lỗi gửi thông tin");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (loadingToastId) dismissToast(loadingToastId);
      showError("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.", "Lỗi gửi thông tin");
    }
  };

  const registerModalContent = (
    <div className="space-y-4 sm:space-y-6">
      {/* Header with animated icon */}
      <div className="text-center">
        <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full flex items-center justify-center mb-3 sm:mb-4 animate-pulse-slow">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
          🚀 Đăng ký trải nghiệm miễn phí
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          Điền thông tin để nhận tư vấn và demo miễn phí
        </p>
      </div>

      <form className="space-y-3 sm:space-y-4" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {/* Họ và tên */}
          <div>
            <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
              Họ và tên
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nhập tên của bạn"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Chức vụ */}
          <div>
            <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
              Chức vụ
            </label>
            <select
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="" disabled>
                -- Chọn chức vụ --
              </option>
              <option value="hieutruong">Hiệu trưởng</option>
              <option value="pho-hieutruong">Phó hiệu trưởng</option>
              <option value="giaovien">Giáo viên</option>
              <option value="nhanvien">Nhân viên</option>
              <option value="khac">Khác</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Nhập email của bạn"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Số điện thoại */}
          <div>
            <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
              Số điện thoại
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        {/* Đơn vị công tác */}
        <div>
          <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
            Đơn vị công tác
          </label>
          <select
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="" disabled>
              -- Chọn đơn vị --
            </option>
            <option value="tieu-hoc">Trường Tiểu học</option>
            <option value="thcs">Trường THCS</option>
            <option value="thpt">Trường THPT</option>
            <option value="trung-tam">Trung tâm Giáo dục</option>
            <option value="khac">Khác</option>
          </select>
        </div>

        {/* Lời nhắn */}
        <div>
          <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
            Lời nhắn
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            placeholder="Nhập lời nhắn của bạn"
            className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-3 sm:pt-4">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Đăng ký trải nghiệm
          </button>
        </div>
      </form>


    </div>
  );

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const selectedReason = reasons[selectedIndex];

  // Auto-switch tabs functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % reasons.length);
      }, 4000); // Switch every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, reasons.length]);

  // Pause auto-play when user manually selects a tab
  const handleTabClick = (index: number) => {
    setSelectedIndex(index);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <section className="relative z-50 py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container">
        {/* Section Title with enhanced animation */}
        <motion.div
          className="wow fadeInUp"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="5 lý do nên chọn DSchool"
            paragraph="DSchool là giải pháp quản lý trường học toàn diện, giúp bạn tiết kiệm thời gian, nâng cao hiệu quả và tối ưu hóa quy trình vận hành."
            center
            mb="60px"
          />
        </motion.div>

        {/* Enhanced Tabs with staggered animation and auto-play indicator */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3 sm:gap-4 wow fadeInUp"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`relative rounded-full border px-4 py-3 text-xs sm:text-sm font-medium transition-all duration-300 md:text-base md:px-6 transform hover:scale-105 active:scale-95 min-h-[48px] flex items-center justify-center text-center
                ${selectedIndex === index
                  ? "border-primary bg-primary text-white shadow-lg shadow-primary/25"
                  : "border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary hover:shadow-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {selectedIndex === index && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-600"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {reason.title}
                {selectedIndex === index && isAutoPlaying && (
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Auto-play status indicator */}
        <motion.div
          className="flex justify-center mb-6 wow fadeInUp"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center px-3 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
          </div>
        </motion.div>

        {/* Enhanced Animated Reason Display */}
        <motion.div
          className="mx-auto max-w-4xl wow fadeInUp"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
                type: "spring",
                stiffness: 100
              }}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:bg-gray-800 dark:border-gray-700"
            >
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full opacity-10"></div>

              <div className="relative">
                <motion.h4
                  className="mb-4 text-2xl font-bold text-primary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {selectedReason.title}
                </motion.h4>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {selectedReason.desc}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:mt-12 xl:mt-16 wow fadeInUp"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleRegisterClick}
            className="group relative mt-4 rounded-xl bg-gradient-to-r from-[#053cc0] to-[#1e40af] px-10 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Đăng ký ngay</span>
              <motion.span
                className="text-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </motion.button>

          {/* Test Notification Button - Remove after testing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-4"
          >

          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Background Shape with animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-[9999999]" style={{ zIndex: 9999999 }}>
        <CommonModal
          isOpen={isRegisterModalOpen}
          onClose={closeRegisterModal}
          title=""
          content={registerModalContent}
          primaryButtonText=""
          secondaryButtonText=""
          onPrimaryClick={() => { }}
          size="md"
          hideFooter={true}
        />
      </div>
    </section>
  );
};

export default Video;
