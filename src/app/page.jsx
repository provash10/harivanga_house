import Banner from "@/components/HomePages/Banner/Banner";
import CustomerReviews from "@/components/HomePages/CustomersReview/CustomerReviews";
import ServiceProcess from "@/components/HomePages/ServiceProcess/ServiceProcess";
import ShopByCategory from "@/components/HomePages/ShopByCategory/ShopByCategory";
import ShopNowTemplate from "@/components/HomePages/ShopNowTemplate/ShopNowTemplate";
import ShopTemplateSubscribe from "@/components/HomePages/ShopTemplate/ShopTemplateSubscribe";
import WhyChoose from "@/components/HomePages/WhyChooseHarivanga/WhyChoose";
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ServiceProcess></ServiceProcess>
      {/* <ShopByCategory></ShopByCategory> */}
      <WhyChoose></WhyChoose>
      <CustomerReviews></CustomerReviews>
      <ShopNowTemplate></ShopNowTemplate>
      {/* <ShopTemplateSubscribe></ShopTemplateSubscribe> */}

    </div>
  );
}
