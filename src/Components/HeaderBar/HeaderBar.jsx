import { Link, useNavigate } from "react-router-dom";
import "./HeaderBar.css";
import { useMemo } from "react";
function HeaderBar({ headerTitle, tabLists }) {
  const role = sessionStorage.getItem("role");
  const navigate = useNavigate();

  const navList = useMemo(() => {
    return tabLists.filter((item) => item.roleAccess.includes(role));
  });

  const handleSignOut = () => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div className="header-bar">
      <ul className="list-tabs">
        <li>
          <div className="title">{headerTitle}</div>
        </li>
        {navList.map((t) => (
          <li key={t.id}>
            <Link to={t.link} className="tab">
              {t.name}
            </Link>
          </li>
        ))}
        {role == null && (
          <li>
            <Link to={"login"} className="tab">
              login
            </Link>
          </li>
        )}
        {role != null && (
          <li>
            <Link className="tab" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default HeaderBar;
