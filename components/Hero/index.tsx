"use client";
import { useState } from "react";
import Link from "next/link";
import { CommonModal, useModal } from "../Modal/CommonModal";
import { submitToGoogleSheetsAPI, FormData as GoogleSheetsFormData } from "../../lib/googleSheets";

const Hero = () => {
  const { isOpen: isBuyModalOpen, openModal: openBuyModal, closeModal: closeBuyModal } = useModal();
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
    try {
      console.log("🚀 Hero: Starting form submission...");

      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone) {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc (Họ tên, Email, Số điện thoại)");
        return;
      }

      // Prepare data for Google Sheets
      const googleSheetsData: GoogleSheetsFormData = {
        name: formData.name,
        position: formData.position,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        message: formData.message,
        timestamp: new Date().toISOString(),
        source: "buy"
      };

      console.log("📤 Hero: Sending data to Google Sheets:", googleSheetsData);

      // Submit to Google Sheets
      const success = await submitToGoogleSheetsAPI(googleSheetsData);

      console.log("✅ Hero: Submission result:", success);

      if (success) {
        alert("Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ lại sớm nhất để tư vấn gói phù hợp.");
        // Reset form
        setFormData({
          name: "",
          position: "",
          email: "",
          phone: "",
          organization: "",
          message: "",
        });
        closeBuyModal();
      } else {
        alert("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.");
    }
  };

  const handleBuyClick = () => {
    console.log("Buy button clicked!");
    openBuyModal();
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buyModalContent = (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          🎉 Đăng ký mua gói dịch vụ
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Điền thông tin để nhận tư vấn và báo giá chi tiết
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
      </form>

      <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
        <p className="text-xs text-blue-800 dark:text-blue-200">
          💡 <strong>Cam kết:</strong> Thông tin của bạn được bảo mật tuyệt đối và chỉ sử dụng để tư vấn dịch vụ.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Digital School - Nền tảng duy nhất số hóa toàn diện cho trường
                  học
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Tắt cả mọi nghiệp vụ trên cùng một hệ thống
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    onClick={handleBuyClick}
                    className="rounded-md bg-[#053cc0] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Mua ngay
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "contact")}
                    className="inline-block rounded-md bg-[#ffc600] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#ffc600]/80"
                  >
                    Đăng ký trải nghiệm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>

      <CommonModal
        isOpen={isBuyModalOpen}
        onClose={closeBuyModal}
        title="Đăng ký mua gói dịch vụ"
        content={buyModalContent}
        primaryButtonText="Gửi đăng ký"
        secondaryButtonText="Hủy"
        onPrimaryClick={handleSubmit}
        size="lg"
      />
    </>
  );
};

export default Hero;
