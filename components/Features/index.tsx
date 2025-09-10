import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import RadialFeatures from "./RadialFeatures";
import trangchus2 from "../../public/images/logo/trangchus2.png";
import Link from "next/link";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Quản lý dữ liệu tập trung với DSchool"
            paragraph=" "
            center
          />

          {/* Hero Content Section */}
          <div className="mt-16 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Section */}
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="relative">
                  <img
                    src={trangchus2.src}
                    alt="DSchool Ecosystem"
                    className="w-full max-w-md lg:max-w-lg object-cover   transition-shadow duration-300"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                    Hệ sinh thái đa dạng và toàn diện
                  </h3>
                  <p className="text-base lg:text-lg text-[#818a9a] leading-relaxed">
                    Hệ sinh thái đa dạng bao gồm Website và Mobile App riêng cho Sở/ Ban ngành, trường học, phụ huynh và học sinh đảm bảo dữ liệu thống nhất và xuyên suốt trong môi trường giáo dục.
                  </p>
                </div>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-[#818a9a] ">Website quản lý</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-[#818a9a] ">Mobile App</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-[#818a9a]">Dữ liệu thống nhất</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-[#818a9a] ">Tích hợp xuyên suốt</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Button content */}
                    <Link href="/feature">
                      <div className="relative flex items-center space-x-2">
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Khám phá tính năng</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>

                    {/* Shine effect */}
                    <div className="absolute inset-0 -top-2 -left-2 w-8 h-8 bg-white opacity-20 rounded-full transform -rotate-45 group-hover:translate-x-32 group-hover:translate-y-32 transition-transform duration-700"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>


          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 mt-16">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
