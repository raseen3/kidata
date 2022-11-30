import { NavLink } from "react-router-dom";

export function LessonCard(props) {
  const { src: image, name, link } = props.cardInfo;

  return (
    <NavLink to={link}>
      <div className="card">
        <img
          src={image}
        />
        <h3>{name}</h3>
      </div>
    </NavLink>
  )
}

export function LessonCardList(props) {
  return (
    <li className="card-list">
      {props.cards.map((cardInfo, i) => <LessonCard cardInfo={cardInfo} key={i.toString()} />)}
    </li>
  );
}

export default LessonCardList;