import { FaAlignJustify } from "react-icons/fa";
// import { courses } from "../Database";
import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";


export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course: any) => course._id === cid);
  // const { pathname } = useLocation();
  
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />{course && course.name} 
 </h2>
      <hr />
      <div className="d-flex flex-wrap">
        <div className="col-12 col-md-3 d-none d-md-block" style={{ maxWidth: "200px" }}>
          <CoursesNavigation />
        </div>
        <div className="col-12 col-md-9 flex-fill ">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
);}
