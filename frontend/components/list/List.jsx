import { useRef, useState } from "react";
import ListItem from "../list-item/ListItem";
import "./list.scss";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function List() {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const handleSlideClick = (direction) => {
    setHasMoved(true);

    // distance from the left side of the page (minus slider arrow width) (X)
    let distance = listRef.current.getBoundingClientRect().x - 50;
    const totalNumberOfSlides = 5;

    // left click
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    // right click
    if (direction === "right" && slideNumber < totalNumberOfSlides) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue watching</span>
      <div className="wrapper">
        <MdArrowBackIos
          className="sliderArrow left"
          onClick={() => handleSlideClick("left")}
          style={{ display: !hasMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
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
