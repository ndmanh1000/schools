import Image from "next/image";
import phuhuynh from "../../public/images/about/phuhuynh.webp";

const AboutSectionFour = () => {
  return (
    <section className="">
      <div className="container">

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">

              <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                <span style={{ color: '#22c55e' }}>•</span> Theo dõi kết quả học tập, chuyên cần, khen thưởng, kỷ luật và
                học phí rõ ràng
              </div>
              <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                <span style={{ color: '#22c55e' }}>•</span> Tăng cường trải nghiệm học tập với công nghệ, dễ tiếp cận tài
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
                src={phuhuynh.src}
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
