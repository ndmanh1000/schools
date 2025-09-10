import Image from "next/image";
import giaovien from "../../public/images/about/giaovien.webp";

const AboutSectionTwo = () => {
  return (
    <section>
      <div className="container">

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <p className="py-5 text-2xl font-semibold text-black">
                -Giáo viên
              </p>
              <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                -Quản lý lớp học
              </div>
              <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                -Theo sát lịch làm việc, thời khóa biểu
              </div>
              <div className="mb-4 text-[20px] font-bold text-[#8a92a1] dark:text-white ">
                -Ra đề tự động, chấm thi online
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src={giaovien.src}
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

export default AboutSectionTwo;
