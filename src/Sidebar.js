import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`sidebar ${visible ? "slide-in" : ""}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
