import React, { useState } from "react";
import About from "@com/About";
import "./index.scss";

export default function Footer() {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <footer>
      {isShowModal ? <About set={setIsShowModal} /> : ""}
      <div className="footer-content">
        <span>Nice To Meet Ya! </span>
        <span
          onClick={() => {
            setIsShowModal(!isShowModal);
          }}
          id="about"
        >
          About
        </span>
      </div>
    </footer>
  );
}
