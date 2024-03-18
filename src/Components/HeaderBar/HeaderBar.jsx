import { Link } from "react-router-dom";
import "./HeaderBar.css";
function HeaderBar({ headerTitle, tabLists }) {
  return (
    <div className="header-bar">
      <ul className="list-tabs">
        <li>
          <div className="title">{headerTitle}</div>
        </li>
        {tabLists.map((t) => (
          <li key={t.id}>
            <Link to={t.link} className="tab">
              {t.name}
            </Link>
          </li>
        ))}
        <li>
          <Link to={"login"} className="tab">
            login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderBar;
