"use client";
import React from "react";
import { motion } from "framer-motion";
import NewsLatterBox from "./NewsLatterBox";
import { CommonModal, useModal } from "../Modal/CommonModal";
import { showSuccess, showError, showInfo, showLoading, dismissToast } from "../Common/NotificationToast";
import cskkkk from "../../public/images/footer/cskkkk.webp";
// ✅ Khai báo kiểu dữ liệu props
interface ContactProps {
    showForm?: boolean;
    setShowForm?: (value: boolean) => void;
}

// ✅ Đặt mặc định cho props nếu không được truyền
const Contact: React.FC<ContactProps> = ({
    showForm = true,
    setShowForm = () => { },
}) => {
    const [formData, setFormData] = React.useState({
        name: "",
        position: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
    });

    // Modal states - chỉ giữ modal xác nhận
    const confirmModal = useModal();
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Validate form data
    const validateForm = () => {
        if (!formData.name.trim()) {
            showError("Vui lòng nhập họ và tên", "Thiếu thông tin");
            return false;
        }
        if (!formData.email.trim()) {
            showError("Vui lòng nhập email", "Thiếu thông tin");
            return false;
        }
        if (!formData.phone.trim()) {
            showError("Vui lòng nhập số điện thoại", "Thiếu thông tin");
            return false;
        }
        if (!formData.position) {
            showError("Vui lòng chọn chức vụ", "Thiếu thông tin");
            return false;
        }
        if (!formData.organization) {
            showError("Vui lòng chọn đơn vị công tác", "Thiếu thông tin");
            return false;
        }
        return true;
    };

    // Submit form to API
    const submitToAPI = async () => {
        let loadingToastId: string | undefined;

        try {
            setIsSubmitting(true);
            loadingToastId = showLoading("Đang gửi thông tin...", "Vui lòng chờ");

            const response = await fetch('/api/submit-to-sheets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                if (loadingToastId) dismissToast(loadingToastId);
                showSuccess("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.", "Đăng ký thành công!");
                // Reset form
                setFormData({
                    name: "",
                    position: "",
                    email: "",
                    phone: "",
                    organization: "",
                    message: "",
                });
            } else {
                throw new Error(result.error || 'Có lỗi xảy ra khi gửi thông tin');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            if (loadingToastId) dismissToast(loadingToastId);
            showError("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.", "Lỗi gửi thông tin");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Show confirmation modal
        confirmModal.openModal();
    };

    const handleConfirmSubmit = () => {
        confirmModal.closeModal();
        submitToAPI();
    };

    return (
        <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-200/20 to-purple-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="container relative z-10">
                <div className="-mx-4 flex flex-wrap items-stretch">
                    <motion.div
                        className="w-full px-4 lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="wow fadeInUp mb-12 rounded-2xl bg-white/80 backdrop-blur-sm px-8 py-11 shadow-xl border border-gray-200/50 dark:bg-gray-dark/80 dark:border-gray-700/50 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] h-full"
                            data-wow-delay=".15s"
                        >
                            {showForm ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="-mx-4 flex flex-wrap">
                                        {/* Họ và tên */}
                                        <motion.div
                                            className="w-full px-4 md:w-1/2"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.3 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="mb-8">
                                                <label className="mb-3 block text-sm font-semibold text-dark dark:text-white">
                                                    Họ và tên *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Nhập tên của bạn"
                                                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-6 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Chức vụ */}
                                        <motion.div
                                            className="w-full px-4 md:w-1/2"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.4 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="mb-8">
                                                <label className="mb-3 block text-sm font-semibold text-dark dark:text-white">
                                                    Chức vụ
                                                </label>
                                                <select
                                                    name="position"
                                                    value={formData.position}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-6 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                                                >
                                                    <option value="" disabled>
                                                        -- Chọn chức vụ --
                                                    </option>
                                                    <option value="hieutruong">Hiệu trưởng</option>
                                                    <option value="pho-hieutruong">
                                                        Phó hiệu trưởng
                                                    </option>
                                                    <option value="giaovien">Giáo viên</option>
                                                    <option value="nhanvien">Nhân viên</option>
                                                    <option value="khac">Khác</option>
                                                </select>
                                            </div>
                                        </motion.div>

                                        {/* Email */}
                                        <motion.div
                                            className="w-full px-4 md:w-1/2"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="mb-8">
                                                <label className="mb-3 block text-sm font-semibold text-dark dark:text-white">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Nhập email của bạn"
                                                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-6 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Số điện thoại */}
                                        <motion.div
                                            className="w-full px-4 md:w-1/2"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.6 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="mb-8">
                                                <label className="mb-3 block text-sm font-semibold text-dark dark:text-white">
                                                    Số điện thoại *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Nhập số điện thoại"
                                                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-6 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Đơn vị công tác */}
                                        <motion.div
                                            className="w-full px-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.7 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="mb-8">
                                                <label className="mb-3 block text-sm font-semibold text-dark dark:text-white">
                                                    Đơn vị công tác
                                                </label>
                                                <select
                                                    name="organization"
                                                    value={formData.organization}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-6 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
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
                                        </motion.div>

                                        {/* Lời nhắn */}
                                        <motion.div
                                            className="w-full px-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.8 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="mb-8">
                                                <label className="mb-3 block text-sm font-semibold text-dark dark:text-white">
                                                    Lời nhắn
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={5}
                                                    placeholder="Nhập lời nhắn của bạn"
                                                    className="w-full resize-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-6 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                                                ></textarea>
                                            </div>
                                        </motion.div>

                                        {/* Nút gửi */}
                                        <motion.div
                                            className="w-full px-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.9 }}
                                            viewport={{ once: true }}
                                        >
                                            <motion.button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {isSubmitting ? (
                                                    <div className="flex items-center space-x-2">
                                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                        <span>Đang gửi...</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center space-x-2">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                        </svg>
                                                        <span>Đăng ký</span>
                                                    </div>
                                                )}
                                            </motion.button>
                                        </motion.div>

                                        {/* Test Notification Button - Remove after testing */}

                                    </div>
                                </form>
                            ) : (
                                <p className="text-center text-lg font-medium text-green-600">
                                    ✅ Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.
                                </p>
                            )}
                        </div>
                    </motion.div>

                    {/* Cột phải */}
                    <motion.div
                        className="w-full px-4 lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full flex items-center justify-cente mt-4">
                            <motion.img
                                src={cskkkk.src}
                                alt="cskkkk"
                                className="w-full h-full object-cover rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Confirmation Modal */}
            <CommonModal
                isOpen={confirmModal.isOpen}
                onClose={confirmModal.closeModal}
                title=""
                content={
                    <div className="text-center">
                        {/* Animated Icon */}
                        <div className="mb-6">
                            <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center animate-pulse">
                                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Xác nhận đăng ký
                        </h3>

                        {/* Message */}
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Bạn có chắc chắn muốn gửi thông tin đăng ký này không?
                        </p>

                        {/* Form Data Summary */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 sm:p-6 mb-6 border border-blue-200 dark:border-gray-600">
                            <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-4 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Thông tin đăng ký
                            </h4>
                            <div className="grid grid-cols-1 gap-3 text-sm">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-blue-200 dark:border-gray-600">
                                    <span className="font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-0">Họ tên:</span>
                                    <span className="text-gray-900 dark:text-white font-semibold break-words">{formData.name}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-blue-200 dark:border-gray-600">
                                    <span className="font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-0">Email:</span>
                                    <span className="text-gray-900 dark:text-white font-semibold break-words">{formData.email}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-blue-200 dark:border-gray-600">
                                    <span className="font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-0">Số điện thoại:</span>
                                    <span className="text-gray-900 dark:text-white font-semibold break-words">{formData.phone}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-blue-200 dark:border-gray-600">
                                    <span className="font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-0">Chức vụ:</span>
                                    <span className="text-gray-900 dark:text-white font-semibold break-words">
                                        {formData.position === 'hieutruong' ? 'Hiệu trưởng' :
                                            formData.position === 'pho-hieutruong' ? 'Phó hiệu trưởng' :
                                                formData.position === 'giaovien' ? 'Giáo viên' :
                                                    formData.position === 'nhanvien' ? 'Nhân viên' :
                                                        formData.position === 'khac' ? 'Khác' : formData.position}
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2">
                                    <span className="font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-0">Đơn vị:</span>
                                    <span className="text-gray-900 dark:text-white font-semibold break-words">
                                        {formData.organization === 'tieu-hoc' ? 'Trường Tiểu học' :
                                            formData.organization === 'thcs' ? 'Trường THCS' :
                                                formData.organization === 'thpt' ? 'Trường THPT' :
                                                    formData.organization === 'trung-tam' ? 'Trung tâm Giáo dục' :
                                                        formData.organization === 'khac' ? 'Khác' : formData.organization}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Warning Message */}
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                                <div>
                                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                        <strong>Lưu ý:</strong> Sau khi gửi, thông tin sẽ được lưu vào hệ thống và chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                primaryButtonText=""
                secondaryButtonText=""
                onPrimaryClick={() => { }}
                onSecondaryClick={() => { }}
                size="lg"
                customFooter={
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
                        <button
                            onClick={confirmModal.closeModal}
                            className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600 transition-all duration-200 flex items-center justify-center"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Hủy
                        </button>
                        <button
                            onClick={handleConfirmSubmit}
                            className="w-full sm:w-auto px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Xác nhận gửi
                        </button>
                    </div>
                }
            />

        </section>
    );
};

export default Contact;
