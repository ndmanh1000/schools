import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              fewfewe
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="shadow-three dark:bg-gray-dark mb-10 mt-12 rounded-sm bg-white p-6 dark:shadow-none lg:mt-0">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="border-stroke dark:text-body-color-dark dark:shadow-two mr-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  />
                  <button
                    aria-label="search button"
                    className="flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-sm bg-primary text-white"
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Related Posts
                </h3>
                <ul className="p-8">
                  <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                    <RelatedPost
                      title="Best way to boost your online sales."
                      image="/images/blog/post-01.jpg"
                      slug="#"
                      date="12 Feb 2025"
                    />
                  </li>
                  <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                    <RelatedPost
                      title="50 Best web design tips & tricks that will help you."
                      image="/images/blog/post-02.jpg"
                      slug="#"
                      date="15 Feb, 2024"
                    />
                  </li>
                  <li>
                    <RelatedPost
                      title="The 8 best landing page builders, reviewed"
                      image="/images/blog/post-03.jpg"
                      slug="#"
                      date="05 Jun, 2024"
                    />
                  </li>
                </ul>
              </div>
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Popular Category
                </h3>
                <ul className="px-8 py-6">
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Tailwind Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Landing page
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Startup
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Multipurpose
                    </a>
                  </li>
                </ul>
              </div>
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap px-8 py-6">
                  <TagButton text="Themes" />
                  <TagButton text="UI Kit" />
                  <TagButton text="Tailwind" />
                  <TagButton text="Startup" />
                  <TagButton text="Business" />
                </div>
              </div>

              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
