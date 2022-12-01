import { LessonCardList } from "../components/LessonCardList";

import image_1_1 from "../Lessons_LinYang/division_1.jpg";
import image_1_2 from "../Lessons_Zhuoqun/pie_6.jpg";
import image_2_1 from "../Lessons_LinYang/multiplication_1.jpg";
import image_2_2 from "../Lessons_Zhuoqun/probability_1.jpg";

const cardData = [
  {
    src: image_1_1,
    name: "Division",
    link: "/lessons/5"
  },
  {
    src: image_1_2,
    name: "Pie Charts",
    link: "/lessons/6"
  },
  {
    src: image_2_1,
    name: "Multiplication",
    link: "/lessons/7"
  },
  {
    src: image_2_2,
    name: "Probability",
    link: "/lessons/8"
  },
]

function Grade34() {
  return <LessonCardList cards={cardData} />;
}

export default Grade34;