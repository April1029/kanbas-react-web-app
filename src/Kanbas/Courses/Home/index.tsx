import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="d-flex flex-wrap" id="wd-home">
      <div className="col-12 col-md-9 flex-fill">
        <Modules />{" "}
      </div>
      <div className="col-12 col-md-3 d-none d-md-block">
        <CourseStatus />{" "}
      </div>
    </div>
  );
}