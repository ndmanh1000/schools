import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aton Page | Free Next.js Template for Startup and SaaS",
  description: "This is Aton Page for Startup Nextjs Template",
  // other metadata
};

const AtonPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Aton Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Aton
                </h1>
                <p className="text-base text-body-color dark:text-dark-6">
                  Nội dung trang Aton sẽ được thêm vào đây.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AtonPage;