"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function FeatureMainn() {
    const [activeSlide, setActiveSlide] = useState(0);

    const features = [
        {
            id: 1,
            title: "Quản lý vận hành",
            icon: "🏢",
            features: [
                "Phân quyền chặt chẽ theo vai trò (BGH, GV, NVVP, Phụ huynh, Học sinh)",
                "Quản lý thời khóa biểu, lớp học, thiết bị – tài sản",
                "Hệ thống báo cáo hoạt động tự động"
            ],
            result: "Giảm 80% công việc hành chính, minh bạch thông tin toàn trường",
            color: "from-blue-500 to-blue-600",
            bgColor: "from-blue-50 to-blue-100"
        },
        {
            id: 2,
            title: "Hệ thống LMS & nội dung học tập",
            icon: "📚",
            features: [
                "Tạo & quản lý đề thi, bài tập theo chương trình chuẩn",
                "Biểu mẫu đề bài theo khung chương trình – mạch kiến thức",
                "Ngân hàng tài liệu lọc theo Loại – Bộ sách – Kỳ thi"
            ],
            result: "Giáo viên chủ động, học sinh tiếp cận nhanh, phụ huynh theo sát",
            color: "from-green-500 to-green-600",
            bgColor: "from-green-50 to-green-100"
        },
        {
            id: 3,
            title: "Khảo thí & Đánh giá",
            icon: "📝",
            features: [
                "Ra đề online/offline với ma trận chuẩn",
                "Tổ chức thi trực tuyến giám sát bằng AI",
                "Phân tích kết quả học tập real-time"
            ],
            result: "Đánh giá công bằng, minh bạch, tiết kiệm thời gian chấm & tổng hợp",
            color: "from-purple-500 to-purple-600",
            bgColor: "from-purple-50 to-purple-100"
        },
        {
            id: 4,
            title: "Tuyển sinh & Quản lý học phí",
            icon: "💰",
            features: [
                "Cổng đăng ký trực tuyến đồng bộ dữ liệu Sở Giáo dục",
                "Quản lý hồ sơ nhập học",
                "Thu chi minh bạch, kết nối ví điện tử & ngân hàng"
            ],
            result: "Phụ huynh tiện lợi, nhà trường giảm sai sót, minh bạch tài chính",
            color: "from-orange-500 to-orange-600",
            bgColor: "from-orange-50 to-orange-100"
        },
        {
            id: 5,
            title: "Kết nối dữ liệu ba chiều",
            icon: "🔗",
            features: [
                "Báo cáo theo chuẩn Bộ/Sở Giáo dục",
                "Đồng bộ thông tin học tập – điểm số – tài chính lên hệ thống ngành",
                "Push thông báo xuống phụ huynh & học sinh theo thời gian thực"
            ],
            result: "Giảm tải 80% thời gian làm báo cáo, tăng uy tín & minh bạch",
            color: "from-indigo-500 to-indigo-600",
            bgColor: "from-indigo-50 to-indigo-100"
        }
    ];

    return (
        <section id="feature-main" >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="container relative z-10">
                {/* Section Title */}
                <div className="flex items-center justify-center text-center ">
                    <SectionTitle
                        title="Nhóm tính năng chính"
                        paragraph=""
                    />
                </div>

                {/* Swiper Container */}
                <div className="max-w-6xl mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination-custom',
                            bulletClass: 'swiper-pagination-bullet-custom',
                            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="feature-swiper"
                    >
                        {features.map((feature, index) => (
                            <SwiperSlide key={feature.id} className="h-auto">
                                <div className={`h-[600px] flex flex-col bg-gradient-to-br ${feature.bgColor} dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20`}>
                                    {/* Header */}
                                    <div className="text-center mb-6">
                                        <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-2xl shadow-lg`}>
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {feature.title}
                                        </h3>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-3 mb-6 flex-grow overflow-y-auto max-h-[280px]">
                                        {feature.features.map((item, idx) => (
                                            <div key={idx} className="flex items-start space-x-3">
                                                <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mt-2 flex-shrink-0`}></div>
                                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Result Section */}
                                    <div className={`bg-gradient-to-r ${feature.color} rounded-xl p-4 text-center mt-auto`}>
                                        <div className="flex items-center justify-center mb-2">
                                            <span className="text-2xl mr-2">👍</span>
                                            <span className="text-sm font-semibold text-white">Kết quả</span>
                                        </div>
                                        <p className="text-sm text-white font-medium leading-relaxed">
                                            {feature.result}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <div className="flex justify-center items-center mt-8 space-x-4">
                        <button className="swiper-button-prev-custom w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
                            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="swiper-pagination-custom flex space-x-2"></div>

                        <button className="swiper-button-next-custom w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
                            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Custom CSS for Swiper */}
            <style jsx global>{`
                .feature-swiper {
                    padding: 20px 0 60px 0;
                }
                
                .swiper-pagination-bullet-custom {
                    width: 12px;
                    height: 12px;
                    background: #cbd5e1;
                    border-radius: 50%;
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                
                .swiper-pagination-bullet-active-custom {
                    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                    transform: scale(1.2);
                }
                
                .swiper-button-prev-custom:after,
                .swiper-button-next-custom:after {
                    display: none;
                }
                
                .swiper-button-prev-custom.swiper-button-disabled,
                .swiper-button-next-custom.swiper-button-disabled {
                    opacity: 0.3;
                    cursor: not-allowed;
                }
            `}</style>
        </section>
    );
}