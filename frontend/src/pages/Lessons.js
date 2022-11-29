import { NavLink, Outlet } from "react-router-dom";

function Lessons() {
  return (
    <div className="lessons">
      <h1 className="title">Lessons</h1>
      <div className="lesson-content">
        <h1>
          Welcome to KIDATA's lessons
        </h1>
        <p>
          Based on this content, you can learn more interesting skills.</p>
        <p>
          If you are tired of playing games, reading will be a good choice.
        </p>
      </div>
      <div className="lesson-menu">
        <h1>Menu</h1>
        <ul>
          <NavLink to={"/lessons/grade1_2"}>
            <li>
              <h3>Grade 1-2</h3>
            </li>
          </NavLink>
          <NavLink to={"/lessons/grade3_4"}>
            <li>
              <h3>Grade 3-4</h3>
            </li>
          </NavLink>
          <NavLink to={"/lessons/grade5_6"}>
            <li>
              <h3>Grade 5-6</h3>
            </li>
          </NavLink>
        </ul>

        <Outlet />

        {/* temporary: */}
        <div style={{paddingBottom: "100px"}} />
      </div>
    </div>
  )
}

export default Lessons;