import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <input id="wd-username"
        defaultValue="alice"
        placeholder="username"
        className="form-control mb-2" />

      <input id="wd-password"
        defaultValue="123"
        placeholder="password"
        className="form-control mb-2" />

      <input id="wd-firstname"
        defaultValue="Alice"
        placeholder="First Name"
        className="form-control mb-2" />

      <input id="wd-lastname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="form-control mb-2" />
      <input
        id="wd-dob"
        placeholder="mm/dd/yyyy"
        type="date"
        className="form-control mb-2"
      />
      <input
        id="wd-email"
        defaultValue="alice@wonderland"
        type="email"
        className="form-control mb-2"
      />
      <select id="wd-role" className="form-label form-select mb-3">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link id="wd-signup-btn"
              to="/Kanbas/Account/Signin"
              className="btn btn-danger w-100">
              Sign out </Link><br />
    </div>
  );
}
