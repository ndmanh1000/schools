import Image from "next/image";

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
        <p className="py-5 text-center text-2xl font-semibold text-black">
          Hành chính, kế toán
        </p>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
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
