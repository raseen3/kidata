import { NavLink, Outlet } from "react-router-dom";

function Lessons() {
  return (
    <div className="lessons">
      <h1 className="title">Lessons</h1>
      <div className="lesson-card">
        <p class = "information">
          <em>
            <b>
                Based on this content, you can learn more interesting skills.
                If you are tired of playing games, reading will be a good choice.
            </b>
        </em>
        </p>
      </div>
      <h1 className="title">Menu</h1>
      <div className="lesson-menu">
        <ul>
          <NavLink to={"/lessons/grade1_2"}>
            <li className="success">
              <h3>Grade 1-2</h3>
            </li>
          </NavLink>
          <NavLink to={"/lessons/grade3_4"}>
            <li className="warning">
              <h3>Grade 3-4</h3>
            </li>
          </NavLink>
          <NavLink to={"/lessons/grade5_6"}>
            <li className="danger">
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