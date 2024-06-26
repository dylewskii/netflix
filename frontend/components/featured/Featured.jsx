/* eslint-disable react/prop-types */
import "./featured.scss";
import { IoPlay } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img
        src="https://images.pexels.com/photos/8718381/pexels-photo-8718381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="A man pointing two guns to each side"
      />

      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt="A man with a confused look on his face"
        />
        <span className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga culpa
          harum sapiente esse, aliquid est dolore, expedita excepturi pariatur
          deserunt eius corrupti placeat laborum impedit aut numquam iure
          repudiandae obcaecati.
        </span>
        <div className="buttons">
          <button className="play">
            <IoPlay />
            <span>Play</span>
          </button>
          <button className="more">
            <IoMdInformationCircleOutline />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
