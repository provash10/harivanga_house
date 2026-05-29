import Banner from "@/components/HomePages/Banner/Banner";
import CustomerReviews from "@/components/HomePages/CustomersReview/CustomerReviews";
import ServiceProcess from "@/components/HomePages/ServiceProcess/ServiceProcess";
import ShopByCategory from "@/components/HomePages/ShopByCategory/ShopByCategory";
import ShopNowTemplate from "@/components/HomePages/ShopNowTemplate/ShopNowTemplate";
import ShopTemplateSubscribe from "@/components/HomePages/ShopTemplate/ShopTemplateSubscribe";
import WhyChoose from "@/components/HomePages/WhyChooseHarivanga/WhyChoose";
import MangoCard from "@/components/Cards/MangoCard";
import mangoesData from "../../mangoesdata.json";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ServiceProcess></ServiceProcess>

      {/* Featured Mangoes */}
      {/* <section className="px-5 md:px-10 py-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Our Best Mangoes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mangoesData.map((mango) => (
            <MangoCard key={mango.id} mango={mango} />
          ))}
        </div>
      </section> */}

      {/* <ShopByCategory></ShopByCategory> */}
      <WhyChoose></WhyChoose>
      <CustomerReviews></CustomerReviews>
      <ShopNowTemplate></ShopNowTemplate>
      {/* <ShopTemplateSubscribe></ShopTemplateSubscribe> */}
      
    </div>
  );
}
