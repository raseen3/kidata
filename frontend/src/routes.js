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
import Grade12 from "./pages/Grade12";
import Grade34 from "./pages/Grade34";
import Grade56 from "./pages/Grade56";

import LessonPage from "./pages/LessonPage"

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