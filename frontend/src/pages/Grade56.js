import { NavLink } from "react-router-dom";
//import image_1_1 from "../Lessons_Zhuoqun/5_algebra.md";
import image_1_2 from "../Lessons_LinYang/linegraph_1.jpg";
import image_2_1 from "../Lessons_LinYang/dataset_1.jpg";
import image_2_2 from "../Lessons_LinYang/fraction_1.jpg";

function Grade56() {
  return (
    <div className="lesson-content">
      <div className="lesson-title1" >
        <div>{/*<img src={} alt="" width="350px" height="200px"></div><img src={} alt="" width="350px" height="200px"></img>*/}
        </div>
        <br></br>
        <br></br>
        <NavLink to={"/lessons/10"} style={{ textDecoration: "none" }}>
          Algebra
        </NavLink>
      </div>
      <div className="lesson-title2">
        <img src={image_1_2} alt="" width="350px" height="200px">
        </img>
        <br></br>
        <br></br>
        <NavLink to={"/lessons/9"} style={{ textDecoration: "none" }}>
          Linear Graph
        </NavLink>
      </div>
      <div className="lesson-title3">
        <img src={image_2_1} alt="" width="350px" height="200px">
        </img>
        <br></br>
        <br></br>
        <NavLink to={"/lessons/11"} style={{ textDecoration: "none" }}>
          Dataset
        </NavLink>
      </div>
      <div className="lesson-title4">
        <img src={image_2_2} alt="" width="350px" height="200px">
        </img>
        <br></br>
        <br></br>
        <NavLink to={"/lessons/12"} style={{ textDecoration: "none" }}>
          Fraction
        </NavLink>
      </div>
    </div>
  );
}
export default Grade56;