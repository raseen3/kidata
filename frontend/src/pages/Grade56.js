import { LessonCardList } from "../components/LessonCardList";

import image_1_1 from "../Lessons_Zhuoqun/algebra_1.jpg";
import image_1_2 from "../Lessons_LinYang/linegraph_1.jpg";
import image_2_1 from "../Lessons_LinYang/dataset_1.jpg";
import image_2_2 from "../Lessons_LinYang/fraction_1.jpg";

const cardData = [
  {
    src: image_1_1,
    name: "Algebra",
    link: "/lessons/10"
  },
  {
    src: image_1_2,
    name: "Linear Graphs",
    link: "/lessons/9"
  },
  {
    src: image_2_1,
    name: "Dataset",
    link: "/lessons/11"
  },
  {
    src: image_2_2,
    name: "Fractions",
    link: "/lessons/12"
  },
]

function Grade56() {
  return <LessonCardList cards={cardData} />;
}

export default Grade56;