import { all } from "express/lib/application";
import watchStudentDetails from "../../Common Components/StudentList/js/saga";

function* rootSaga() {
  yield all([frok(watchStudentDetails)]);
}
export default rootSaga;
