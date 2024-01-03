import React from "react";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

import mobile from "../../assets/images/mobile.png";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

const ProductGallery = () => {
  const images = [
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile}`,
    },
  ];
  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2"
    >
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showFullscreenButton={true}
        isRTL={true}
        showPlayButton={true}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;
