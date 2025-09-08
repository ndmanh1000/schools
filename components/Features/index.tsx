import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Quản lý dữ liệu tập trung với DSchool edwfdew"
            paragraph=" DSchool cung cấp một nền tảng quản lý dữ liệu tập trung, giúp bạn dễ dàng tổ chức, truy cập và phân tích dữ liệu từ nhiều nguồn khác nhau."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
