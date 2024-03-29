import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import HeaderBar from "./Components/HeaderBar/HeaderBar";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import { HEADER_TAB, HEADER_TITLE } from "./Utils/Const";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("userId") == null) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="App">
      <div className="header">
        <HeaderBar headerTitle={HEADER_TITLE} tabLists={HEADER_TAB} />
      </div>
      <div className="body">
        {/* <div className="sidebar">
          <div className="container">
            <LeftSideBar />
          </div>
        </div> */}
        <div className="main-display">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
