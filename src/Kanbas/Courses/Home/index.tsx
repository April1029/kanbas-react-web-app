import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="d-flex flex-row flex-wrap" id="wd-home">
      <div className="flex-fill col-8 mb-3 mb-md-0 ps-0">
        
        <Modules />
      </div>
      <div className="col-12 col-md-3 ms-md-3 mb-3"> 
        <CourseStatus />
      </div>
    </div>
  );
}