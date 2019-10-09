import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <span className="sm-hidden">
          I don't own any iamges or logos shown. Enjoy!
        </span>
        <Link to="/about"> About</Link>
      </div>
    </footer>
  );
}
