import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({ title, btnTitle, pathText }) => {
  return (
    <Container>
      <SubTiltle title={title} btnTitle={btnTitle} pathText={pathText} />

      <Row className="my-2 d-flex justify-content-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
