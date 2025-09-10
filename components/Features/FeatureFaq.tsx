"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

export default function FeatureFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            id: 1,
            question: "Nền tảng này có thay thế số sách giấy tờ không?",
            answer: "Có. 80% quy trình hành chính, khảo thí, tài chính được số hóa hoàn toàn, đúng chuẩn ngành."
        },
        {
            id: 2,
            question: "Nhà trường có cần hạ tầng đặc biệt để sử dụng?",
            answer: "Không. Chỉ cần máy tính & internet cơ bản. DSchool cloud-based, truy cập mọi nơi."
        },
        {
            id: 3,
            question: "Phụ huynh có cần cài app không?",
            answer: "Có. App mobile dành riêng cho phụ huynh & học sinh, đồng bộ dữ liệu thời gian thực."
        },
        {
            id: 4,
            question: "Dữ liệu có kết nối với Sở GD-ĐT không?",
            answer: "Có. Tất cả báo cáo, hồ sơ, điểm số, tài chính đồng bộ theo chuẩn Bộ/Sở."
        },
        {
            id: 5,
            question: "Nếu cần mở rộng thêm tính năng thì sao?",
            answer: "Nền tảng module hóa, dễ dàng mở rộng theo nhu cầu từng trường."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="feature-faq" className="mt-8 md:mt-10">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-200/20 to-purple-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="container relative z-10">
                {/* Section Title */}
                <motion.div
                    className="flex items-center justify-center text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <SectionTitle
                        title="Câu hỏi thường gặp"
                        paragraph=""
                    />
                </motion.div>

                {/* FAQ Grid */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq.id}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Question */}
                                <motion.button
                                    className="w-full px-6 py-4 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                                    onClick={() => toggleFAQ(index)}
                                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-center space-x-4">
                                        {/* Question Number */}
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                            {faq.id}
                                        </div>

                                        {/* Question Text */}
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                            {faq.question}
                                        </h3>
                                    </div>

                                    {/* Toggle Icon */}
                                    <motion.div
                                        className="flex-shrink-0"
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <svg
                                            className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </motion.div>
                                </motion.button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-4">
                                                <div className="pl-12 border-l-4 border-gradient-to-b from-blue-500 to-indigo-600  from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-r-lg p-4">
                                                    <motion.p
                                                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.3, delay: 0.1 }}
                                                    >
                                                        {faq.answer}
                                                    </motion.p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom CTA */}

                </div>
            </div>
        </section>
    );
}