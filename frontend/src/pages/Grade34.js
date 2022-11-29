import { NavLink } from "react-router-dom";
import image_1_1 from "../Lessons_LinYang/division_1.jpg";
import image_1_2 from "../Lessons_Zhuoqun/length_2.jpg";
import image_2_1 from "../Lessons_LinYang/multiplication_1.jpg";
import image_2_2 from "../Lessons_Zhuoqun/probability_1.jpg";

function Grade34() {
  return (
    <div className="lesson-content">
      <div className="lesson-title1" >
        <img src={image_1_1} alt="" width="350px" height="200px">
        </img>
        <br></br>
        <br></br>
        <NavLink to={"/Lessons/5"} style={{ textDecoration: "none" }}>
          Division
        </NavLink>
      </div>
      <div className="lesson-title2">
        <img src={image_1_2} alt="" width="350px" height="200px">
        </img>
        <br></br>
        <br></br>
        <NavLink to={"/lessons/6"} style={{ textDecoration: "none" }}>
          Pie
        </NavLink>
      </div>
      <div className="lesson-title3">
        <img src={image_2_1} alt="" width="350px" height="200px">
        </img>
        <br></br>
        <br></br>
        <NavLink to={"/lessons/7"} style={{ textDecoration: "none" }}>
          Multiplication
        </NavLink>
      </div>
      <div className="lesson-title4">
        <img src={image_2_2} alt="" width="350px" height="200px">
        </img>
        <br></br>
        <br></br>
        <NavLink to={"/lessons/8"} style={{ textDecoration: "none" }}>
          Probability
        </NavLink>
      </div>
    </div>
  );
}
export default Grade34;