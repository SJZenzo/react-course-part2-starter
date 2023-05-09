import { Outlet } from "react-router-dom";
import NavBar from "../state-management/NavBar";
import TaskList from "../state-management/tasks/TaskList";
import LoginStatus from "../state-management/auth/LoginStatus";
import AuthProvider from "../state-management/auth/AuthProvider";
import TasksProvider from "../state-management/tasks/TasksProvider";
import Counter from "../state-management/counter/Counter";

const Layout = () => {
  return (
    <>
      <TasksProvider>
        <Counter />
        <NavBar />
        <TaskList />
      </TasksProvider>
      <AuthProvider>
        <LoginStatus />
      </AuthProvider>
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
