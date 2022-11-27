import {NavLink} from "react-router-dom";
//import image_1_1 from "../Lessons_Zhuoqun/5_algebra.md";
import image_1_2 from "../Lessons_LinYang/linegraph_1.jpg";
import image_2_1 from "../Lessons_LinYang/dataset_1.jpg";
import image_2_2 from "../Lessons_LinYang/fraction_1.jpg";

function Grade56() {
    return (
        <div className="basic-graph">
            <div className="page-card">
                <h1 className="title">
                    Grade 5 - 6
                </h1>
                
                <div className="lesson-menu">
                    <h1>Menu</h1>
                    <br></br>
                    <br></br>
                    <NavLink to={"/Lesson/Grade1_2"} style={{textDecoration: "none"}}>Grade 1-2</NavLink>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <NavLink to={"/Lesson/Grade3_4"} style={{textDecoration: "none"}}>Grade 3-4</NavLink>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <NavLink to={"/Lesson/Grade5_6"} style={{textDecoration: "none"}}>Grade 5-6</NavLink>
                </div>
            </div>
            <div className="lesson-content">
                <div className="lesson-title1" >
                    <div>{/*<img src={} alt="" width="350px" height="200px"></div><img src={} alt="" width="350px" height="200px"></img>*/}
                    </div>
                    <br></br>
                    <br></br>
                    <NavLink to={"/Lesson/Grade5_6/Algebra"} style={{textDecoration: "none"}}>
                        Algebra
                    </NavLink>
                </div>
                <div className="lesson-title2">
                    <img src={image_1_2} alt="" width="350px" height="200px">
                    </img>
                    <br></br>   
                    <br></br>
                    <NavLink to={"/Lesson/Grade5_6/LinearGraph"} style={{textDecoration: "none"}}>
                        Linear Graph
                    </NavLink>
                </div>
                <div className="lesson-title3">
                    <img src={image_2_1} alt="" width="350px" height="200px">                        
                    </img>
                    <br></br>
                    <br></br>
                    <NavLink to={"/Lesson/Grade5_6/Dataset"} style={{textDecoration: "none"}}>
                        Dataset
                    </NavLink>
                </div>                    
                <div className="lesson-title4">
                    <img src={image_2_2} alt="" width="350px" height="200px">
                    </img>
                    <br></br>
                    <br></br>
                    <NavLink to={"/Lesson/Grade5_6/Fraction"} style={{textDecoration: "none"}}>
                        Fraction
                    </NavLink>
                </div>
                
            </div>

        </div>
    );
}
export default Grade56;