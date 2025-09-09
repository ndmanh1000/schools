"use client";
import React from "react";

import NewsLatterBox from "./NewsLatterBox";

const Contact = ({ showForm, setShowForm }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData); // Log or process the data (e.g., API call)
    // Example: Send to an API
    // fetch('/api/submit', { method: 'POST', body: JSON.stringify(formData), headers: { 'Content-Type': 'application/json' } })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error("Error:", error));
    setShowForm(false); // Hide the form after submission
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <p className="py-5 text-center text-2xl font-semibold text-black">
          Sẵn sàng quản trị số với DSchool ?
        </p>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              {showForm ? (
                <>
                  <p className="mb-12 text-base font-medium text-body-color">
                    Vui lòng điền đầy đủ thông tin để được tư vấn miễn phí.
                  </p>
                </>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    {/* Họ và tên */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Nhập tên của bạn"
                          className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    {/* Chức vụ */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Chức vụ
                        </label>
                        <select
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        >
                          <option value="" disabled>
                            -- Chọn chức vụ --
                          </option>
                          <option value="hieutruong">Hiệu trưởng</option>
                          <option value="pho-hieutruong">
                            Phó hiệu trưởng
                          </option>
                          <option value="giaovien">Giáo viên</option>
                          <option value="nhanvien">Nhân viên</option>
                          <option value="khac">Khác</option>
                        </select>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Nhập email của bạn"
                          className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    {/* Số điện thoại */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Số điện thoại
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Nhập số điện thoại"
                          className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    {/* Đơn vị công tác */}
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Đơn vị công tác
                        </label>
                        <select
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        >
                          <option value="" disabled>
                            -- Chọn đơn vị --
                          </option>
                          <option value="tieu-hoc">Trường Tiểu học</option>
                          <option value="thcs">Trường THCS</option>
                          <option value="thpt">Trường THPT</option>
                          <option value="trung-tam">Trung tâm Giáo dục</option>
                          <option value="khac">Khác</option>
                        </select>
                      </div>
                    </div>

                    {/* Lời nhắn */}
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Lời nhắn
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Nhập lời nhắn của bạn"
                          className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>

                    {/* Nút gửi */}
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        className="rounded-md bg-[#053cc0] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                      >
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Cột phải */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
