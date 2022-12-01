import { LessonCardList } from "../components/LessonCardList";

import image_1_1 from "../Lessons_Zhuoqun/calcu0_10_1.jpg";
import image_1_2 from "../Lessons_Zhuoqun/length_6.jpg";
import image_2_1 from "../Lessons_LinYang/bargraph_1.jpg";
import image_2_2 from "../Lessons_LinYang/lineplots_2.jpg";

const cardData = [
  {
    src: image_1_1,
    name: "Calculation",
    link: "/lessons/1"
  },
  {
    src: image_1_2,
    name: "Length",
    link: "/lessons/2"
  },
  {
    src: image_2_1,
    name: "Bar Graphs",
    link: "/lessons/3"
  },
  {
    src: image_2_2,
    name: "Line Plot",
    link: "/lessons/4"
  },
]

function Grade12() {
  return <LessonCardList cards={cardData} />;
}

export default Grade12;