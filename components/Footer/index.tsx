"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Import hình ảnh với kiểu StaticImageData
import appstore from "../../public/images/footer/appstore.webp";
import googlepl from "../../public/images/footer/googlepl.webp";
import mac from "../../public/images/footer/mac.webp";
import windows from "../../public/images/footer/windows.webp";

// Định nghĩa kiểu cho component (không cần props cụ thể)
const Footer: React.FC = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-12 max-w-[420px] lg:mb-16">
                <div className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-2.webp"
                    alt="logo"
                    width={100}
                    height={30}
                    className="h-16 w-16 md:h-auto md:w-10"
                  />
                </div>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Phần mềm quản lý trường học thế hệ mới, giúp nhà trường vận
                  hành tinh gọn, giảng dạy hiệu quả, khảo thí minh bạch, đồng
                  thời kết nối dữ liệu chặt chẽ giữa Sở/Ban ngành, trường học và
                  gia đình.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/dschooltruonghoc4.0"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-body-color transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/10 hover:text-primary dark:bg-white/5 dark:text-body-color-dark"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      width="9"
                      height="18"
                      viewBox="0 0 9 18"
                      className="fill-current"
                    >
                      <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="sm:col-span-1 lg:col-span-2">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Liên hệ
                </h2>
                <ul className="grid grid-cols-1 gap-4 md:gap-2 ">
                  <li className="mb-2 text-base text-body-color dark:text-body-color-dark">
                    <p>Hotline</p>
                    <p>098 131 72 25</p>
                  </li>
                  <li className="mb-2 text-base text-body-color dark:text-body-color-dark">
                    <p>Email</p>
                    <p>support@dschool.com.vn</p>
                  </li>
                  <li className="mb-2 text-base text-body-color dark:text-body-color-dark">
                    <p>Address</p>
                    <p>BT16B6 - 32, Làng Việt Kiều Châu Âu, Hà Đông, Hà Nội</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sm:col-span-1 lg:col-span-2">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Đường dẫn
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="group relative mb-4 inline-block text-base text-body-color transition-colors duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Trang chủ
                      <span className="absolute left-0 top-full block h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="group relative mb-4 inline-block text-base text-body-color transition-colors duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Giới thiệu
                      <span className="absolute left-0 top-full block h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="group relative mb-4 inline-block text-base text-body-color transition-colors duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Tính năng
                      <span className="absolute left-0 top-full block h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group relative mb-4 inline-block text-base text-body-color transition-colors duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Liên hệ
                      <span className="absolute left-0 top-full block h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Tải xuống
                </h2>
                <ul>
                  <div className="flex w-full flex-col items-center gap-3 md:items-start">
                    <div className="flex w-full flex-row items-center">
                      <div className="w-full">
                        <Link href="" target="_blank">
                          <Image
                            src={googlepl}
                            alt="Google Play"
                            width={135}
                            height={40}
                            className="w-full rounded-md shadow-sm transition-all duration-200 ease-out hover:scale-105 hover:cursor-pointer hover:shadow-md"
                          />
                        </Link>
                      </div>
                      <div className="w-full">
                        <Link href="" target="_blank">
                          <Image
                            src={appstore}
                            alt="App Store"
                            width={135}
                            height={40}
                            className="w-full rounded-md shadow-sm transition-all duration-200 ease-out hover:scale-105 hover:cursor-pointer hover:shadow-md"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="flex w-full flex-row items-center">
                      <div className="w-full">
                        <Link href="" target="_blank">
                          <Image
                            src={windows}
                            alt="Windows"
                            width={135}
                            height={40}
                            className="w-full rounded-md shadow-sm transition-all duration-200 ease-out hover:scale-105 hover:cursor-pointer hover:shadow-md"
                          />
                        </Link>
                      </div>
                      <div className="w-full">
                        <Link href="" target="_blank">
                          <Image
                            src={mac}
                            alt="Mac"
                            width={135}
                            height={40}
                            className="w-full rounded-md shadow-sm transition-all duration-200 ease-out hover:scale-105 hover:cursor-pointer hover:shadow-md"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
