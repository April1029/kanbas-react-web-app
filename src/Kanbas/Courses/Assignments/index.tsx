import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdArrowDropDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";


interface AssignmentInfo {
  modules: string;
  notAvailable: string;
  due: string;
}

interface AssignmentCardProps {
  title: string;
  info: AssignmentInfo;
}

function AssignmentCard({ title, info }: AssignmentCardProps) {
  return (
    <div className="assignment-card d-flex align-items-center border-success p-3 ">
      <div className="d-flex align-items-center me-3">
        <BsGripVertical className="fs-3" />
        <IoNewspaperOutline className="ms-2 fs-4" style={{ color: 'green' }} />
      </div>
      <div className="flex-grow-1">
        <h5 className="assignment-title">{title}</h5>
        <p className="assignment-info">
          <span className="text-danger">{info.modules}</span> | <span><strong>Not available until </strong></span>{info.notAvailable} |  <span><strong>Due</strong> {info.due}</span>
        </p>
      </div>
      <LessonControlButtons />

    </div>
  );
}

export default function Assignments() {
  return (
    <div>
      <AssignmentControls /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title d-flex align-items-center p-3 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-3" />
            <strong>ASSIGNMENTS</strong>
            <div className="ms-auto">
              <button className="btn btn-outline-secondary rounded-pill me-2">40% of total</button>
              <FaPlus className="me-2" />
              <BsThreeDotsVertical />
            </div>


          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-0">
              <a className="wd-assignment-link text-decoration-none text-black"
                href="#/Kanbas/Courses/1234/Assignments/123">
                <AssignmentCard
                  title="A1"
                  info={{
                    modules: "Multiple Modules",
                    notAvailable: "May 6 at 12:00 am",
                    due: "May 13 at 11:59 pm | 100 pts"
                  }}
                />
              </a>

            </li>
            <li className="wd-lesson list-group-item p-0">
              <a className="wd-assignment-link text-decoration-none text-black"
                href="#/Kanbas/Courses/1234/Assignments/123">
                <AssignmentCard
                  title="A2"
                  info={{
                    modules: "Multiple Modules",
                    notAvailable: "May 13 at 12:00 am",
                    due: "May 20 at 11:59 pm | 100 pts"
                  }}
                />
              </a>
            </li>
            <li className="wd-lesson list-group-item p-0">
              <a className="wd-assignment-link text-decoration-none text-black"
                href="#/Kanbas/Courses/1234/Assignments/123">
                <AssignmentCard
                  title="A3"
                  info={{
                    modules: "Multiple Modules",
                    notAvailable: "May 20 at 12:00 am",
                    due: "May 27 at 11:59 pm | 100 pts"
                  }}
                />
              </a>
            </li>

          </ul>
        </li>
      </ul>
    </div>
  );
}
