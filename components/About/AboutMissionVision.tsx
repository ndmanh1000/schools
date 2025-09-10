import SectionTitle from "../Common/SectionTitle";
import miss from "../../public/images/about/miss.webp";

export default function AboutMissionVision() {
    return (
        <section id="mission-vision" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900 relative">
            {/* Geometric Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-300/30 rounded-full blur-2xl"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-200/30 to-red-300/30 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-2xl"></div>
                </div>
            </div>

            <div className="container relative z-10">
                {/* Section Title */}
                <div className="flex items-center justify-center text-center">
                    <SectionTitle
                        title="Sứ mệnh & Tầm nhìn"
                        paragraph=""
                    />
                </div>

                {/* Mission & Vision Layout - Image on one side, texts on other side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Mission & Vision Texts */}
                    <div className="space-y-8 order-2 md:order-1">
                        {/* Mission Section */}
                        <div className="relative">
                            <div className="flex items-start space-x-4">
                                {/* Mission Icon */}
                                <div className="flex-shrink-0">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                
                                {/* Mission Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                                        🎯 Sứ mệnh
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4"></div>
                                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-emerald-200/50 dark:border-emerald-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                            <span className="font-bold text-emerald-600 dark:text-emerald-400">DSchool</span> đồng hành cùng nhà trường trong hành trình chuyển đổi số, giúp mọi hoạt động từ giảng dạy, quản lý, đến kết nối phụ huynh – học sinh trở nên <span className="font-semibold text-teal-600 dark:text-teal-400">đơn giản, minh bạch và hiệu quả</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vision Section */}
                        <div className="relative">
                            <div className="flex items-start space-x-4">
                                {/* Vision Icon */}
                                <div className="flex-shrink-0">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </div>
                                
                                {/* Vision Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                                        🔮 Tầm nhìn
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-4"></div>
                                    <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 border border-orange-200/50 dark:border-orange-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">DSchool</span> hướng tới trở thành <span className="font-semibold text-red-600 dark:text-red-400">nền tảng số chuẩn</span> cho các trường học tại Việt Nam, là cầu nối dữ liệu chặt chẽ giữa <span className="font-semibold text-orange-600 dark:text-orange-400">Sở/Ban ngành – Nhà trường – Gia đình</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="order-1 md:order-2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-orange-400 to-red-400 rounded-3xl opacity-10 blur-xl"></div>
                            <div className="">
                                <img
                                    src={miss.src}
                                    alt="Mission & Vision"
                                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                                />
                                
                                {/* Decorative elements */}
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full opacity-60 animate-pulse"></div>
                                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
                                <div className="absolute top-1/2 -left-2 w-2 h-2 bg-red-400 rounded-full opacity-60 animate-pulse delay-500"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}

            </div>
        </section>
    );
}