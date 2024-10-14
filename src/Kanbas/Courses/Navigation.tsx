import { Link, useLocation, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { courses } from "../Database";


export default function CoursesNavigation() {
  const location = useLocation();  // Get the current path
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  const view = new URLSearchParams(location.search).get('view');
  const isAssignmentPath = location.pathname.includes("/Assignments");
  
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Courses/${cid}/${link}`;
        const isActive = location.pathname === path;

        return (
          <Link
            key={link}
            to={path}
            className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}
            id={`wd-course-${link.toLowerCase()}-link`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
