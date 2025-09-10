import gth from "../../public/images/about/gth.webp";
import SectionTitle from "../Common/SectionTitle";

export default function AboutDevelopment() {
    return (
        <section id="development" className="py-8 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container">
                {/* Section Title */}
                <div className="flex items-center justify-center text-center">
                    <SectionTitle
                        title="Quá trình phát triển"
                        paragraph=""
                    />
                </div>

                {/* Image Section */}
                <div className="flex justify-center px-2 md:px-0">
                    <img
                        src={gth.src}
                        alt="Quá trình phát triển DSchool"
                        className="w-full object-cover h-auto"
                    />
                </div>
            </div>
        </section>
    );
}