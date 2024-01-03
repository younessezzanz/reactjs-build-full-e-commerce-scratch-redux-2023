import React from "react";
import { Row, Col } from "react-bootstrap";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

const ProductDetalis = () => {
  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <ProductGallery />
        </Col>

        <Col lg="8">
          <ProductInfo />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetalis;
