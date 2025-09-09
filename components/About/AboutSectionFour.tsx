import Image from "next/image";

const AboutSectionFour = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <p className="py-5 text-center text-2xl font-semibold text-black">
          Phụ huynh,học sinh
        </p>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                -Theo dõi kết quả học tập, chuyên cần, khen thưởng, kỷ luật và
                học phí rõ ràng
              </div>
              <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                -Tăng cường trải nghiệm học tập với công nghệ, dễ tiếp cận tài
                liệu, học tập mọi lúc mọi nơ
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
