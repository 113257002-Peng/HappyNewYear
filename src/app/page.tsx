"use client";

import { useState, useEffect } from "react";
import Snowflakes from "./components/Snowflakes"; // 雪花特效
import ShareButton from "./components/ShareButton"; // 分享按鈕

const HappyNewYearPage = () => {
  const [animation, setAnimation] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setAnimation(true);
  }, []);

  const handleMouseEnter = () => {
    setMessage("祝你新的一年更幸運！🎉");
  };

  const handleMouseLeave = () => {
    setMessage("");
  };

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center flex-col p-4 relative">
      {/* 雪花特效 */}
      <Snowflakes />

      <h1
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-6xl font-extrabold mb-4 text-center"
        style={{
          animation: animation
            ? "bounceIn 1s ease-out, floatUp 2s ease-in-out infinite"
            : "",
          color: "white",
          textShadow:
            "0 0 10px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6)",
        }}
      >
        Happy New Year!
      </h1>

      {message && <p className="text-xl text-yellow-300">{message}</p>}

      {/* 分享按鈕 */}
      <ShareButton />
    </div>
  );
};

export default HappyNewYearPage;
