import React from "react";

import Slider from "../../components/Home/Slider";
import HomeCategory from "../../components/Home/HomeCategory";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandFeatured from "../../components/Brand/BrandFeatured";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "500px" }}>
      <Slider />
      <HomeCategory />

      <CardProductsContainer
        title="الاكثر مبيعا"
        btnTitle="المزيد"
        pathText="/products"
      />

      <DiscountSection />

      <CardProductsContainer
        title="احدث الازياء"
        btnTitle="المزيد"
        pathText="/products"
      />

      <BrandFeatured title="اشهر الماركات" btnTitle="المزيد" />
    </div>
  );
};

export default HomePage;
