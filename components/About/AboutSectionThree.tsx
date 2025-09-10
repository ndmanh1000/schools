import Image from "next/image";
import ketoan from "../../public/images/about/ketoan.webp";

const AboutSectionThree = () => {
  return (
    <section >
      <div className="container border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src={ketoan.src}
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />

            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <p className="py-5 text-2xl font-semibold text-black">
                -Hành chính, kế toán
              </p>
              <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                -Quản lý dễ dàng, lưu trữ thuận tiện với hồ sơ số
              </div>
              <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                -Theo dõi công, lương chi tiết, tránh nhầm lẫn
              </div>
              <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                -Báo cáo thu, chi, học phí minh bạch
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
