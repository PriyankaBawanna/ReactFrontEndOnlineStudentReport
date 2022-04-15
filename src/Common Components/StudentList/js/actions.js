export const GET_STUDENT_DETAILS = "GET_STUDENT_DETAILS";
export const GET_STUDENT_DETAILS_SUCCES = "GET_STUDENT_DETAILS_SUCCES";
export const GET_STUDENT_DETAILS__FAILED = "GET_STUDENT_DETAILS__FAILED";

export const getStudentDetails = (params) => {
  return { type: GET_STUDENT_DETAILS, payload: params };
};
export const getStudentDetailsSucces = (result) => {
  return { type: GET_STUDENT_DETAILS_SUCCES, result };
};
export const getStudentDetailsFailed = (error) => {
  return { type: GET_STUDENT_DETAILS__FAILED, error };
};
