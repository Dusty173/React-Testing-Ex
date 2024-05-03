import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  let leftToggle = "bi bi-arrow-left-circle"
  let rightToggle ="bi bi-arrow-right-circle"
  
  if(currCardIdx === total - 1){
    rightToggle = "";
  }

  if(currCardIdx === 0){
    leftToggle = ""
  }
  
  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }
  
  // Decrements currCardIdx by 1
  function goBackward(){
    setCurrCardIdx(currCardIdx - 1);
  }



  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className={leftToggle}
          onClick={goBackward}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className={rightToggle}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
