import SectionTitle from "../Common/SectionTitle";

export default function AboutCoreValues() {
    const coreValues = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Công nghệ tiên phong",
            description: "Kế thừa BlueRise và tối ưu hóa cho giáo dục phổ thông, DSchool đem lại trải nghiệm trực quan, dễ sử dụng, bảo mật cao.",
            gradient: "from-blue-500 to-indigo-600",
            bgGradient: "from-blue-50 to-indigo-50",
            darkBgGradient: "from-blue-900/20 to-indigo-900/20"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Tính minh bạch",
            description: "Hệ thống báo cáo – khảo thí chuẩn hóa theo Bộ/Sở, đảm bảo công khai, minh bạch và dễ dàng đối chiếu dữ liệu.",
            gradient: "from-emerald-500 to-teal-600",
            bgGradient: "from-emerald-50 to-teal-50",
            darkBgGradient: "from-emerald-900/20 to-teal-900/20"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            ),
            title: "Khả năng kết nối mạnh mẽ",
            description: "DSchool tích hợp trực tiếp với cơ sở dữ liệu ngành, giúp thông tin luôn được đồng bộ chính xác từ Sở/Ban ngành đến từng nhà trường và gia đình.",
            gradient: "from-purple-500 to-pink-600",
            bgGradient: "from-purple-50 to-pink-50",
            darkBgGradient: "from-purple-900/20 to-pink-900/20"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Đồng hành bền vững",
            description: "Chúng tôi cam kết phát triển lâu dài cùng các trường học, liên tục cập nhật tính năng mới và đội ngũ hỗ trợ chuyên nghiệp 24/7.",
            gradient: "from-orange-500 to-red-600",
            bgGradient: "from-orange-50 to-red-50",
            darkBgGradient: "from-orange-900/20 to-red-900/20"
        }
    ];

    return (
        <section id="core-values" className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-200/30 to-teal-300/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-2xl animate-pulse delay-500"></div>
                <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-orange-200/30 to-red-300/30 rounded-full blur-2xl animate-pulse delay-1500"></div>
            </div>

            <div className="container relative z-10">
                {/* Section Title */}
                <div className="flex items-center justify-center text-center mb-16">
                    <SectionTitle
                        title="Giá trị cốt lõi"
                        paragraph=""
                    />
                </div>

                {/* Core Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
                    {coreValues.map((value, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col"
                        >
                            {/* Card */}
                            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 flex flex-col h-full">
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} dark:bg-gradient-to-br dark:${value.darkBgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="text-white">
                                            {value.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                                        {value.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                                        {value.description}
                                    </p>
                                </div>

                                {/* Hover effect border */}
                                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                            </div>

                            {/* Floating decorative element */}
                            <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${value.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}

            </div>
        </section>
    );
}