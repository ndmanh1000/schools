import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import bangiamhieu from "../../public/images/about/bangiamhieu.webp";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="flex items-center justify-center text-center">
          <SectionTitle title="DSchool giúp nhà trường" paragraph="" />
        </div>

        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">

          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src={bangiamhieu.src}
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />

              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">

                <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                  <span style={{ color: '#22c55e' }}>•</span> Nắm vững vận hành
                </div>
                <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                  <span style={{ color: '#22c55e' }}>•</span> Quản trị dễ dàng
                </div>
                <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                  <span style={{ color: '#22c55e' }}>•</span> Theo dõi số liệu real - time
                </div>
                <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                  <span style={{ color: '#22c55e' }}>•</span> Ra quyết định nhanh chóng, chính xác
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
