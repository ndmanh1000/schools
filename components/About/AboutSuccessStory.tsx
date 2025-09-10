import atuan from "../../public/images/about/atuan.webp";
import SectionTitle from "../Common/SectionTitle";

export default function AboutSuccessStory() {
    return (
        <section id="success-story" className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container">
                {/* Section Title */}
                <div className="flex items-center justify-center text-center">
                    <SectionTitle
                        title="Câu chuyện hình thành"
                        paragraph=""
                    />
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Founder Section */}
                    <div className="order-1 lg:order-1">
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 rounded-3xl opacity-10 blur-xl"></div>

                            {/* Founder Card */}
                            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8">
                                {/* Profile Image */}
                                <div className="flex flex-col items-center text-center space-y-6">
                                    <div className="relative">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full opacity-20 animate-pulse"></div>
                                        <img
                                            src={atuan.src}
                                            alt="Mr. Trần Anh Tuấn"
                                            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
                                        />
                                        {/* Status indicator */}
                                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
                                    </div>

                                    {/* Founder Info */}
                                    <div className="space-y-2">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                            Mr. Trần Anh Tuấn
                                        </h3>
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                                Chủ tịch, CEO & Founder
                                            </p>
                                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                        </div>

                                        {/* Achievement badges */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Story Content */}
                    <div className="order-2 lg:order-2">
                        <div className="space-y-6">
                            {/* Story Header */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                                        Từ Blue Rise đến DSchool
                                    </h2>
                                </div>

                                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                            </div>

                            {/* Story Content */}
                            <div className="space-y-6">
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base lg:text-lg">
                                        Trong suốt nhiều năm, <span className="font-semibold text-blue-600 dark:text-blue-400">Blue Rise</span> đã trở thành lựa chọn hàng đầu của các trung tâm giáo dục nhờ hệ thống quản lý vận hành - đào tạo thông minh.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base lg:text-lg">
                                        Tuy nhiên, với đặc thù quản lý phức tạp hơn của các trường học phổ thông, nhu cầu về một nền tảng chuyên biệt, chuẩn hóa theo <span className="font-semibold text-purple-600 dark:text-purple-400">Bộ/Sở Giáo dục</span> ngày càng rõ rệt.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500 transform hover:-translate-y-1">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base lg:text-lg">
                                        Đó chính là lý do <span className="font-bold text-indigo-600 dark:text-indigo-400">DSchool</span> ra đời. Kế thừa lõi công nghệ mạnh mẽ từ Blue Rise nhưng được tùy biến chuyên sâu cho môi trường trường học, từ quản lý giấy tờ, hồ sơ, học tập, khảo thí đến tuyển sinh và tài chính - kế toán.
                                    </p>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="pt-6">
                                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative flex items-center space-x-2">
                                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span>Khám phá thêm về DSchool</span>
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>

                                    <div className="absolute inset-0 -top-2 -left-2 w-8 h-8 bg-white opacity-20 rounded-full transform -rotate-45 group-hover:translate-x-32 group-hover:translate-y-32 transition-transform duration-700"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-20 w-2 h-2 bg-indigo-400 rounded-full opacity-30 animate-pulse delay-500"></div>
                <div className="absolute bottom-40 right-10 w-5 h-5 bg-blue-300 rounded-full opacity-20 animate-pulse delay-1500"></div>
            </div>
        </section>
    );
}