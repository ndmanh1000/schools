"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import tinhnang11 from "../../public/images/feature/tinhnang11.webp";
import { CommonModal, useModal } from "../Modal/CommonModal";
import { submitToGoogleSheetsAPI, FormData as GoogleSheetsFormData } from "../../lib/googleSheets";
import { showSuccess, showError, showInfo, showLoading, dismissToast } from "../Common/NotificationToast";
import tnbg from "../../public/images/feature/tnbg.webp";


export default function FeatureHead() {
    // Modal states
    const { isOpen: isRegisterModalOpen, openModal: openRegisterModal, closeModal: closeRegisterModal } = useModal();
    const { isOpen: isBuyModalOpen, openModal: openBuyModal, closeModal: closeBuyModal } = useModal();

    // Debug modal states
    console.log('Modal states:', { isRegisterModalOpen, isBuyModalOpen });

    // Fallback functions for mobile
    const handleRegisterClick = () => {
        console.log('handleRegisterClick called');
        try {
            openRegisterModal();
        } catch (error) {
            console.error('Error opening register modal:', error);
        }
    };

    const handleBuyClick = () => {
        console.log('handleBuyClick called');
        try {
            openBuyModal();
        } catch (error) {
            console.error('Error opening buy modal:', error);
        }
    };

    // Form data for both modals
    const [registerFormData, setRegisterFormData] = useState({
        name: "",
        position: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
    });

    const [buyFormData, setBuyFormData] = useState({
        name: "",
        position: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
    });

    // Handle input changes
    const handleRegisterInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setRegisterFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBuyInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBuyFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submissions
    const handleRegisterSubmit = async () => {
        let loadingToastId: string | undefined;

        try {
            console.log("🚀 Starting register form submission...");

            // Validate required fields
            if (!registerFormData.name || !registerFormData.email || !registerFormData.phone) {
                showError("Vui lòng điền đầy đủ thông tin bắt buộc (Họ tên, Email, Số điện thoại)", "Thiếu thông tin");
                return;
            }

            console.log("✅ Form validation passed");

            // Show loading notification
            loadingToastId = showLoading("Đang gửi thông tin...", "Vui lòng chờ");

            // Prepare data for Google Sheets
            const googleSheetsData: GoogleSheetsFormData = {
                name: registerFormData.name,
                position: registerFormData.position,
                email: registerFormData.email,
                phone: registerFormData.phone,
                organization: registerFormData.organization,
                message: registerFormData.message,
                timestamp: new Date().toISOString(),
                source: "register"
            };

            console.log("📤 Sending data to Google Sheets:", googleSheetsData);

            // Submit to Google Sheets
            const success = await submitToGoogleSheetsAPI(googleSheetsData);

            if (success) {
                if (loadingToastId) dismissToast(loadingToastId);
                showSuccess("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ lại sớm nhất.", "Đăng ký thành công!");
                console.log("✅ Form submitted successfully");

                // Reset form
                setRegisterFormData({
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
                showError("Có lỗi xảy ra khi gửi thông tin. Vui lòng kiểm tra console để xem chi tiết lỗi.", "Lỗi gửi thông tin");
                console.error("❌ Form submission failed");
            }
        } catch (error) {
            console.error("❌ Error submitting form:", error);
            if (loadingToastId) dismissToast(loadingToastId);
            showError(`Lỗi: ${error instanceof Error ? error.message : 'Unknown error'}`, "Lỗi gửi thông tin");
        }
    };

    const handleBuySubmit = async () => {
        let loadingToastId: string | undefined;

        try {
            console.log("🚀 Starting buy form submission...");

            // Validate required fields
            if (!buyFormData.name || !buyFormData.email || !buyFormData.phone) {
                showError("Vui lòng điền đầy đủ thông tin bắt buộc (Họ tên, Email, Số điện thoại)", "Thiếu thông tin");
                return;
            }

            console.log("✅ Form validation passed");

            // Show loading notification
            loadingToastId = showLoading("Đang gửi thông tin...", "Vui lòng chờ");

            // Prepare data for Google Sheets
            const googleSheetsData: GoogleSheetsFormData = {
                name: buyFormData.name,
                position: buyFormData.position,
                email: buyFormData.email,
                phone: buyFormData.phone,
                organization: buyFormData.organization,
                message: buyFormData.message,
                timestamp: new Date().toISOString(),
                source: "buy"
            };

            console.log("📤 Sending data to Google Sheets:", googleSheetsData);

            // Submit to Google Sheets
            const success = await submitToGoogleSheetsAPI(googleSheetsData);

            if (success) {
                if (loadingToastId) dismissToast(loadingToastId);
                showSuccess("Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ lại sớm nhất để tư vấn gói phù hợp.", "Đăng ký thành công!");
                console.log("✅ Form submitted successfully");

                // Reset form
                setBuyFormData({
                    name: "",
                    position: "",
                    email: "",
                    phone: "",
                    organization: "",
                    message: "",
                });
                closeBuyModal();
            } else {
                if (loadingToastId) dismissToast(loadingToastId);
                showError("Có lỗi xảy ra khi gửi thông tin. Vui lòng kiểm tra console để xem chi tiết lỗi.", "Lỗi gửi thông tin");
                console.error("❌ Form submission failed");
            }
        } catch (error) {
            console.error("❌ Error submitting form:", error);
            if (loadingToastId) dismissToast(loadingToastId);
            showError(`Lỗi: ${error instanceof Error ? error.message : 'Unknown error'}`, "Lỗi gửi thông tin");
        }
    };

    // Modal content for register (like Video)
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

            <form className="space-y-3 sm:space-y-4" onSubmit={(e) => { e.preventDefault(); handleRegisterSubmit(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {/* Họ và tên */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={registerFormData.name}
                            onChange={handleRegisterInputChange}
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
                            value={registerFormData.position}
                            onChange={handleRegisterInputChange}
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
                            value={registerFormData.email}
                            onChange={handleRegisterInputChange}
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
                            value={registerFormData.phone}
                            onChange={handleRegisterInputChange}
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
                        value={registerFormData.organization}
                        onChange={handleRegisterInputChange}
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
                        value={registerFormData.message}
                        onChange={handleRegisterInputChange}
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

    // Modal content for buy (like Hero)
    const buyModalContent = (
        <div className="space-y-6">
            {/* Header with animated icon */}
            <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full flex items-center justify-center mb-4 animate-pulse-slow">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    🎉 Đăng ký mua gói dịch vụ
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Điền thông tin để nhận tư vấn và báo giá chi tiết
                </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleBuySubmit(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Họ và tên */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={buyFormData.name}
                            onChange={handleBuyInputChange}
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
                            value={buyFormData.position}
                            onChange={handleBuyInputChange}
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
                            value={buyFormData.email}
                            onChange={handleBuyInputChange}
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
                            value={buyFormData.phone}
                            onChange={handleBuyInputChange}
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
                        value={buyFormData.organization}
                        onChange={handleBuyInputChange}
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
                        value={buyFormData.message}
                        onChange={handleBuyInputChange}
                        rows={3}
                        placeholder="Nhập lời nhắn của bạn"
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Đăng ký ngay
                    </button>
                </div>
            </form>
        </div>
    );

    return (
        <>
            <section id="feature-head" className="py-16 md:py-20 lg:py-28 from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
                {/* Background decorative elements */}


                {/* Full Screen Image Section */}
                <div>

                    <div className=" w-full">
                        <img
                            src={tnbg.src}
                            className="w-full object-cover object-center rounded-md"
                            alt="tnbg"
                        />
                    </div>
                </div>

                {/* Content Section - Below the image */}
                <div className="container pt-4 md:pt-8 lg:pt-16 relative z-10">
                    <div className="w-full mx-auto">
                        <div>
                            {/* Section Title */}


                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center relative z-20">
                                {/* Đăng ký ngay button - simplified for mobile */}
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        console.log('Register button clicked on mobile');
                                        handleRegisterClick();
                                    }}
                                    onTouchEnd={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        console.log('Register button touched on mobile');
                                        handleRegisterClick();
                                    }}
                                    className="relative inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 w-full sm:w-auto min-h-[50px] cursor-pointer z-30"
                                    style={{
                                        WebkitTapHighlightColor: 'transparent',
                                        WebkitTouchCallout: 'none',
                                        WebkitUserSelect: 'none',
                                        userSelect: 'none',
                                        touchAction: 'manipulation'
                                    }}
                                >
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <span>Đăng ký ngay</span>
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>

                                {/* Nhận báo giá button - simplified for mobile */}
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        console.log('Buy button clicked on mobile');
                                        handleBuyClick();
                                    }}
                                    onTouchEnd={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        console.log('Buy button touched on mobile');
                                        handleBuyClick();
                                    }}
                                    className="relative inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 w-full sm:w-auto min-h-[50px] cursor-pointer z-30"
                                    style={{
                                        WebkitTapHighlightColor: 'transparent',
                                        WebkitTouchCallout: 'none',
                                        WebkitUserSelect: 'none',
                                        userSelect: 'none',
                                        touchAction: 'manipulation'
                                    }}
                                >
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span>Nhận báo giá</span>
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Register Modal (like Video) */}
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

            {/* Buy Modal (like Hero) */}
            <CommonModal
                isOpen={isBuyModalOpen}
                onClose={closeBuyModal}
                title=""
                content={buyModalContent}
                primaryButtonText=""
                secondaryButtonText=""
                onPrimaryClick={() => { }}
                size="lg"
                hideFooter={true}
            />
        </>
    );
}