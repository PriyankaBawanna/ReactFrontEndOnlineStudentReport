import StudentList from "./Common Components/StudentList/js/StudentList";
// import TeacherList from "./Common Components/TeacherList/TeacherList";
import Routers from "./Components/Home/js/Routers";
// import AdminRouter from "./Components/schoolAdmin/js/js/AdminRouter";
// import HeaderAdmin from "./Components/schoolAdmin/js/js/HeaderAdmin";

// import AddParent from "./Model/AddParent/js/AddParent";
// import AddStudent from "./Model/AddStudent/js/AddStudent";
// import AddTeacher from "./Model/AddTeacher/js/AddTeacher";

// import SchoolAdmin from "./Components/schoolAdmin/js/js/SchooAdmin";
import StudentInformation from "./Common Components/StudentInformation/js/StudentInformation";
import TeacherDashBoard from "./Components/TeacherDashboard/js/TeacherDashboard";
function App() {
  return (
    <>
      {/* <Routers />
      <AddStudent />
      <h1>Welcome to </h1>
      <AddParent />
      <AddTeacher /> */}
      <Routers />
      {/* <SchoolAdmin /> */}
      {/* <AddStudent /> */}
      {/* <StudentList /> */}

      <TeacherDashBoard />
    </>
  );
}

export default App;
