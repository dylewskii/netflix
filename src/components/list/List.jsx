import ListItem from "../list-item/ListItem";
import "./list.scss";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function List() {
  return (
    <div className="list">
      <span className="listTitle">Continue watching</span>
      <div className="wrapper">
        <MdArrowBackIos className="sliderArrow left" />
        <div className="container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <MdArrowForwardIos className="sliderArrow right" />
      </div>
    </div>
  );
}

export default List;
