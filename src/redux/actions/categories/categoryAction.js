import {
  GET_ALL_CATEGORY,
  GET_ERROR,
  CREATE_CATEGORY,
  LIMIT_CATEGORY,
} from "../../type";
import useGetData from "../../../hooks/useGetData";
import { useInsertDataWithImage } from "../../../hooks/useInsertData";

// Get all category
const getAllCategory = () => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/categories?limit=${LIMIT_CATEGORY}`
    );

    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + error,
    });
  }
};

// Get all category with pagination
const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/categories?limit=${LIMIT_CATEGORY}&page=${page}`
    );

    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Create a new category
const createCategory = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      `/api/v1/categories`,
      formData
    );

    dispatch({
      type: CREATE_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export { getAllCategory, getAllCategoryPage, createCategory };
