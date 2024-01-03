import React from "react";
import { Card, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

import prod1 from "../../assets/images/prod1.png";
import favoff from "../../assets/images/fav-off.png";
import rate from "../../assets/images/rate.png";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <Link to="/products/:id" style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favoff}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">
              سود كربون ساعة يد ذكية بيب إس أسود كربون{" "}
            </div>
          </Card.Title>
          <Card.Text>
            <span className="d-flex justify-content-between">
              <span className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <span className="card-rate mx-2">4.5</span>
              </span>
              <span className="d-flex">
                <span className="card-price">880</span>
                <span className="card-currency mx-1">جنيه</span>
              </span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
