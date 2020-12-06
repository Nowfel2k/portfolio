import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import "../Style/index.css";

function ReturnToTop() {
  const [len, setLen] = useState(0);

  let myScrollFunc = function () {
    setLen(window.scrollY);
  };

  window.addEventListener("scroll", myScrollFunc);

  return (
    <div className={`returnToTop ${len < 800 && "hide"}`} id="return-btn">
      <button
        onClick={() =>
          scroll.scrollToTop({
            duration: 2000,
            smooth: true,
          })
        }
      >
        <i class="fas fa-chevron-up"></i>
      </button>
    </div>
  );
}

export default ReturnToTop;
