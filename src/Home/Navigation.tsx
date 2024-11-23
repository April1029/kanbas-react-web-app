import { Link } from "react-router-dom";
export default function HomeNavigation() {
  return (
    <div id="wd-kanbas-navigation">
      <a href="https://github.com/April1029/kanbas-react-web-app.git/" id="wd-github-repo-link" target="_blank">React.js Source Code </a><br/>
      <a href="https://github.com/April1029/kanbas-node-server-app.git" id="wd-github-repo-link" target="_blank">Node.js Source Code </a><br/>
      <Link to="/Kanbas/Account" id="wd-account-link">Kanbas</Link><br/>
      <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
    </div>
);}
