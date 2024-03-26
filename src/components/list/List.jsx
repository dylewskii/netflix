import "./list.scss";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function List() {
  return (
    <div className="list">
      <span className="listTitle">Continue watching</span>
      <div className="wrapper">
        <MdArrowBackIos />
        <div className="container"></div>
        <MdArrowForwardIos />
      </div>
    </div>
  );
}

export default List;
