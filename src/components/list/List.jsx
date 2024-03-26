import { useRef } from "react";
import ListItem from "../list-item/ListItem";
import "./list.scss";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function List() {
  const listRef = useRef();

  const handleSlideClick = (direction) => {
    // distance from the start of the webpage (X)
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left") {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    } else if (direction === "right") {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    } else {
      throw new Error("Incorrect direction");
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue watching</span>
      <div className="wrapper">
        <MdArrowBackIos
          className="sliderArrow left"
          onClick={() => handleSlideClick("left")}
        />
        <div className="container" ref={listRef}>
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
        <MdArrowForwardIos
          className="sliderArrow right"
          onClick={() => handleSlideClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
