import useCounterStore from "./counter/store";
import useTasks from "./tasks/useTasks";

const NavBar = () => {
  const { tasks } = useTasks();
  const counter = useCounterStore((s) => s.counter);

  console.log("render navbar");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
    </nav>
  );
};

export default NavBar;
