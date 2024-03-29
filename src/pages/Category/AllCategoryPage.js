import React from "react";
import CategoryContainer from "../../components/Category/CategoryContainer";
import Pagination from "../../components/Uitily/Pagination";
import useAllCategory from "../../hook/category/useAllCategory";

const AllCategoryPage = () => {
  const [category, loading, pageCount, getPage] = useAllCategory();

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </div>
  );
};

export default AllCategoryPage;
