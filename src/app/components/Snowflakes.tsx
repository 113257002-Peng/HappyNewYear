"use client";

import React, { useEffect } from "react";
import "../styles/Snowflakes.css"; // 確保你有CSS文件

const Snowflakes = () => {
  useEffect(() => {
    const snowflakes = document.querySelectorAll(".snowflake");
    snowflakes.forEach((snowflake) => {
      const snowflakeElement = snowflake as HTMLElement;
      if (snowflakeElement instanceof HTMLElement) {
        snowflakeElement.style.animationDuration = `${Math.random() * 5 + 5}s`; // 隨機動畫時長
        snowflakeElement.style.animationDelay = `${Math.random() * 5}s`; // 隨機延遲
        snowflakeElement.style.left = `${Math.random() * 100}vw`; // 隨機水平位置
        snowflakeElement.style.top = `${Math.random() * 100}vh`; // 隨機垂直位置
      }
    });
  }, []);

  return (
    <div className="snowflakes-container">
      {Array.from({ length: 25 }).map((_, index) => (
        <div key={index} className="snowflake">
          ❄️
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;
