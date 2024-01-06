import { GET_ALL_CATEGORY, CREATE_CATEGORY, GET_ERROR } from "../../type";

// Intial State Value
const initial = {
  category: [],
  loading: true,
};

// Create Reducer category
const categoryReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };

    case CREATE_CATEGORY:
      return {
        category: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        category: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};

export default categoryReducer;
