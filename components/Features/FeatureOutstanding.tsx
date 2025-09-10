"use client";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

export default function FeatureOutstanding() {
    const features = [
        {
            id: 1,
            title: "All-in-one",
            description: "Từ tuyển sinh đến báo cáo Ngành trong một nền tảng",
            icon: "🎯",
            color: "from-blue-500 to-blue-600",
            bgColor: "from-blue-50 to-blue-100",
            delay: 0.1
        },
        {
            id: 2,
            title: "Trải nghiệm dễ dùng",
            description: "Thiết kế UX dành riêng cho giáo dục Việt Nam",
            icon: "✨",
            color: "from-green-500 to-green-600",
            bgColor: "from-green-50 to-green-100",
            delay: 0.2
        },
        {
            id: 3,
            title: "Tùy biến cao",
            description: "Linh hoạt theo từng cấp học & yêu cầu địa phương",
            icon: "⚙️",
            color: "from-purple-500 to-purple-600",
            bgColor: "from-purple-50 to-purple-100",
            delay: 0.3
        },
        {
            id: 4,
            title: "Bảo mật & ổn định",
            description: "Đạt chuẩn bảo mật dữ liệu ngành",
            icon: "🔒",
            color: "from-orange-500 to-orange-600",
            bgColor: "from-orange-50 to-orange-100",
            delay: 0.4
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1
        }
    };

    const hoverVariants = {
        hover: {
            y: -10,
            scale: 1.05
        }
    };

    return (
        <section id="feature-outstanding">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
                <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-orange-200/20 to-red-300/20 rounded-full blur-2xl animate-pulse delay-1500"></div>
            </div>

            <div className="container relative z-10">
                {/* Section Title */}
                <motion.div
                    className="flex items-center justify-center text-center mt-10 md:mt-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <SectionTitle
                        title="Ưu điểm nổi bật"
                        paragraph=""

                    />
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            className="group"
                            variants={cardVariants}
                            whileHover="hover"
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <motion.div
                                className={`relative h-full bg-gradient-to-br ${feature.bgColor} dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 overflow-hidden`}
                                variants={hoverVariants}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                {/* Background decoration */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-8 -translate-x-8"></div>

                                {/* Icon */}
                                <motion.div
                                    className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}
                                    whileHover={{
                                        rotate: [0, -10, 10, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    {feature.icon}
                                </motion.div>

                                {/* Content */}
                                <div className="text-center relative z-10">
                                    <motion.h3
                                        className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                                        whileHover={{ color: "#3b82f6" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {feature.title}
                                    </motion.h3>

                                    <motion.p
                                        className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {feature.description}
                                    </motion.p>
                                </div>

                                {/* Hover effect overlay */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                                ></motion.div>

                                {/* Number badge */}
                                <motion.div
                                    className={`absolute top-4 left-4 w-8 h-8 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {feature.id}
                                </motion.div>

                                {/* Shine effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                ></motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom decorative line */}
                <motion.div
                    className="flex justify-center mt-16"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"></div>
                </motion.div>
            </div>
        </section >
    );
}