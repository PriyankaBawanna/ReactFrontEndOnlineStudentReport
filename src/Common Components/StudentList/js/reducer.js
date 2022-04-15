import {
  GET_STUDENT_DETAILS,
  GET_STUDENT_DETAILS_SUCCES,
  GET_STUDENT_DETAILS__FAILED,
} from "./actions";

const initalState = {
  isFetching: false,
  items: {},
};

const getStudentDetailsReducer = (state = initalState, action) => {
  console.log("Student Reducer is calling ");
  switch (action.type) {
    case GET_STUDENT_DETAILS:
      return {
        ...state,
        isFetching: true,
      };

    case GET_STUDENT_DETAILS_SUCCES:
      return {
        ...state,
        isFetching: false,
        items: action.result,
      };
    case GET_STUDENT_DETAILS__FAILED:
      return {
        ...state,
        isFetching: false,
      };
    default: {
      return state;
    }
  }
};
export default getStudentDetailsReducer;
