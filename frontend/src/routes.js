import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route 
} from "react-router-dom";

import PageLayout from "./components/PageLayout";

import Home from "./pages/Home"
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact"
import Lessons from "./pages/Lessons";
import LessonPage from "./pages/LessonPage"

import Grade12 from "./pages/Grade12";
import Grade34 from "./pages/Grade34";
import Grade56 from "./pages/Grade56";

import Calculation from "./pages/lesson/Calculation";
import Length from "./pages/lesson/Length";
import BarGraph from "./pages/lesson/BarGraph";
import LinePlot from "./pages/lesson/LinePlot";
import Division from "./pages/lesson/Division";
import Pie from "./pages/lesson/Pie";
import Multiplication from "./pages/lesson/Multiplication";
import Probability from "./pages/lesson/Probability";
import Algebra from "./pages/lesson/Algebra";
import LinearGraph from "./pages/lesson/LinearGraph";
import Dataset from "./pages/lesson/Dataset";
import Fraction from "./pages/lesson/Fraction";


const router = createBrowserRouter(
  createRoutesFromElements([
    // root pages:
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/lessons" element={<Lessons />}>
        <Route index element={<Grade12 />} />
        <Route path="/lessons/grade1_2" element={<Grade12 />} />
        <Route path="/lessons/grade3_4" element={<Grade34 />} />
        <Route path="/lessons/grade5_6" element={<Grade56 />} />
      </Route>
      {/* individual lessons: */}
      <Route path="/lessons/:id" element={<LessonPage />} />
      {/* error page: */}
      <Route path="*" element={<Error />} />
    </Route>,

    // full pages:
  ])
);

export default router;