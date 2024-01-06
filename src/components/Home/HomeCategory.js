import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";
import useHomeCategory from "../../hook/category/useHomeCategory";
import useColors from "../../hook/useColors";

const HomeCategory = () => {
  const [category, loading] = useHomeCategory();
  const [colors] = useColors();

  return (
    <Container>
      <SubTiltle title="التصنيفات" btnTitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          category.data.length > 0 ? (
            category.data.slice(0, 5).map((item, index) => {
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

export default HomeCategory;
