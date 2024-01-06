import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categories/categoryAction";

const useAllCategory = () => {
  const dispatch = useDispatch();

  // When first load
  useEffect(() => {
    dispatch(getAllCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // To get state from redux
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  // To get page count
  let pageCount = 0;
  if (category.paginationResult)
    pageCount = category.paginationResult.numberOfPages;

  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };

  return [category, loading, pageCount, getPage];
};

export default useAllCategory;
