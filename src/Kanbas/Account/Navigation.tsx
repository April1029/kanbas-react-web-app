import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const location = useLocation();  // Get the current path
  const view = new URLSearchParams(location.search).get('view');
  const isAssignmentPath = location.pathname.includes("/Assignments");
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kanbas/Account/Signin"
        id="wd-account-signin-link"
        className={`list-group-item border border-0 ${location.pathname === "/Kanbas/Account/Signin" ? "active" : "text-danger"}`}
      >
        Sign in
      </Link>
      <Link
        to="/Kanbas/Account/Signup"
        id="wd-account-signup-link"
        className={`list-group-item border border-0 ${location.pathname === "/Kanbas/Account/Signup" ? "active" : "text-danger"}`}
      >
        Sign up
      </Link>
      <Link
        to="/Kanbas/Account/Profile"
        id="wd-account-profile-link"
        className={`list-group-item border border-0 ${location.pathname === "/Kanbas/Account/Profile" ? "active" : "text-danger"}`}
      >
        Profile
      </Link>
      
    </div>
);}
