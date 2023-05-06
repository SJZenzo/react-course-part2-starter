import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Counter from "../state-management/Counter";
import TaskList from "../state-management/TaskList";
import LoginStatus from "../state-management/LoginStatus";

const Layout = () => {
  return (
    <>
      <NavBar />
      <LoginStatus />
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
