import { useParams } from "react-router-dom";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdArrowDropDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import * as db from "../../Database";


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

function formatDateTime(dateStr: string) {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    console.error(`Invalid date: ${dateStr}`);
    return dateStr;
  }

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
  const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);

  return `${formattedDate} at ${formattedTime}`;
}

export default function Assignments() {
  const { cid } = useParams(); // Get the course ID from the URL
  const { assignments } = db; // Get the assignments from the database

  // Filter assignments based on the course ID
  const courseAssignments = assignments.filter((assignment) => assignment.course === cid);
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
            {courseAssignments.map((assignment: any) => (
              <li className="wd-lesson list-group-item p-0" key={assignment._id}>
                <a className="wd-assignment-link text-decoration-none text-black"
                  href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} >
                  <AssignmentCard
                    title={assignment.title}
                    info={{
                      modules: assignment.modules,
                      notAvailable: formatDateTime(assignment.notAvailable),
                      due: formatDateTime(assignment.due),
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
