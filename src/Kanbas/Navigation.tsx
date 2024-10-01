import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
  const location = useLocation();
  const view = new URLSearchParams(location.search).get('view');
  const isCoursePath = location.pathname.includes("/Courses/");

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 115 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" alt="NEU" />
      </a>
      <br />
      <NavLink
        to="/Kanbas/Account"
        id="wd-account-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <FaRegCircleUser className="fs-1" />
        <br />
        Account
      </NavLink>
      <br />
      <NavLink
        to="/Kanbas/Dashboard?view=dashboard"
        id="wd-dashboard-link"
        className={
          view === "dashboard"
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </NavLink>
      <br />
      <NavLink
        to="/Kanbas/Dashboard?view=courses"
        id="wd-course-link"
        className={
          view === "courses" || isCoursePath
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </NavLink>
      <br />
      <NavLink
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </NavLink>
      <br />
      <NavLink
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </NavLink>
      <br />
      <NavLink
        to="/Labs"
        id="wd-labs-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </NavLink>
      <br />
    </div>
  );
}
