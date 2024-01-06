import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";

import CategoryCard from "./../Category/CategoryCard";
import useColors from "../../hook/useColors";

const CategoryContainer = ({ data, loading }) => {
  const [colors] = useColors();

  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[index]}
                />
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
