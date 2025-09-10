import SectionTitle from "../Common/SectionTitle";
import gts1 from "../../public/images/about/gts1.webp";


export default function AboutHeader() {
    return (
        <section id="about" className="pt-16 md:pt-20 lg:pt-28 md:mt-20 mt-14 md:mb-10 mb-10">
            <div className="container">
                <div className="flex items-center justify-center text-center">
                    <SectionTitle title="Digital School - Giải pháp chuyển đổi số toàn diện nhất dành cho trường học" paragraph="TÍch hợp quản lý vận hành, học tập, khảo thí và kết nối dữ liệu với Sở/Ban ngành, giúp nhà trường vận hành tinh gọn và minh bạch" />
                </div>

                {/* Banner Image Section - Responsive */}
                <div>
                    <div className="relative w-full">
                        {/* Placeholder for banner image - Replace with your actual image */}
                        <div className="relative w-full h-auto rounded-lg md:rounded-xl lg:rounded-2xl ">
                            {/* Image placeholder - Replace this div with your actual img tag */}
                            <div className="w-full h-full flex items-center justify-center">


                                <img src={gts1.src} alt="gts1" className="rounded-md w-full h-full object-cover" />

                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
                            <div className="absolute top-1/2 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse delay-500"></div>
                        </div>

                        {/* Optional overlay text - Uncomment if needed */}
                        {/* 
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                                    Banner Title
                                </h3>
                                <p className="text-sm md:text-base lg:text-lg opacity-90">
                                    Banner subtitle or description
                                </p>
                            </div>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </section>
    );
}