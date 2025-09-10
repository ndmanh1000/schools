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
                                        {/* Circular border frame */}
                                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-700 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-20 animate-pulse"></div>
                                        
                                        {/* Larger image that overflows the circle */}
                                        <img
                                            src={atuan.src}
                                            alt="Mr. Trần Anh Tuấn"
                                            className="absolute -top-16 left-1/2 w-52 h-52 md:w-60 md:h-56  object-cover transform -translate-x-1/2 -translate-y-1/2 translate-y-2 hover:scale-110 transition-all duration-500 z-10"
                                            style={{
                                                filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))'
                                            }}
                                        />
                                        
                                        {/* Status indicator */}
                                        <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse z-20"></div>
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