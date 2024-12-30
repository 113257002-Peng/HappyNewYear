"use client";

import React, { useEffect } from "react";
import "../styles/Snowflakes.css"; // 確保你有CSS文件

const Snowflakes = () => {
  useEffect(() => {
    const snowflakes = document.querySelectorAll(".snowflake");
    snowflakes.forEach((snowflake) => {
      snowflake.style.animationDuration = `${Math.random() * 3 + 3}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
    });
  }, []);

  return (
    <div className="snowflakes-container">
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="snowflake">
          ❄️
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;
