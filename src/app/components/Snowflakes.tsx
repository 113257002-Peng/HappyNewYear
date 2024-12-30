"use client";

import React, { useEffect } from "react";
import "../styles/Snowflakes.css"; // 確保你有CSS文件

const Snowflakes = () => {
  useEffect(() => {
    const snowflakes = document.querySelectorAll(".snowflake");
    snowflakes.forEach((snowflake) => {
      // 隨機設定雪花的動畫時長和延遲
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // 降落時間更長
      snowflake.style.animationDelay = `${Math.random() * 5}s`; // 隨機延遲時間
      snowflake.style.left = `${Math.random() * 100}vw`; // 隨機水平位置，讓雪花分散
      snowflake.style.top = `${Math.random() * 100}vh`; // 隨機垂直位置，讓雪花分佈在整個畫面
    });
  }, []);

  return (
    <div className="snowflakes-container">
      {Array.from({ length: 25 }).map(
        (
          _,
          index // 減少雪花數量
        ) => (
          <div key={index} className="snowflake">
            ❄️
          </div>
        )
      )}
    </div>
  );
};

export default Snowflakes;
