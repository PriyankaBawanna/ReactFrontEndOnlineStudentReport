import {
  GET_STUDENT_DETAILS,
  GET_STUDENT_DETAILS_SUCCES,
  getStudentDetailsFailed,
  getStudentDetailsSucces,
} from "./actions";

function* getStudentDetails(action) {
  try {
    console.log("Student List Saga is calling ");
    const URL = `http://localhost:8085/addStudent`;

    const apiResponse = yield GetRequest(URL);
    console.log("-api response", apiResponse);

    if (!apiResponse || Object.keys(apiResponse).length === 0) {
      yield put(getStudentDetailsFailed(apiResponse));
      return;
    }
    yield put(getStudentDetailsSucces(apiResponse));
    return;
  } catch (err) {
    alert("Error");
  }
}

function* watchStudentDetails() {
  yield takeLatest(GET_STUDENT_DETAILS, getStudentDetails);
}

export default watchStudentDetails;
