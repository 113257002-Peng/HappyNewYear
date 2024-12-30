"use client"; // 在檔案的開頭加上這一行

import { useState, useEffect } from "react";
import Snowflakes from "./components/Snowflakes"; // 引入雪花特效
import ShareButton from "./components/ShareButton"; // 引入分享按鈕

const HappyNewYearPage = () => {
  const [message, setMessage] = useState(
    "幸運(可憐)的朋友，\n\n恭喜你！收到了我精心準備的兩個完全沒用的小破鍵盤作為新年禮物！🎉\n\n第一個是iPad用的藍牙鍵盤，第二個是便宜的但還算好用的電競鍵盤。\n\n為什麼這兩個鍵盤沒用呢？因為我有個壞習慣，看到漂亮或者想要的鍵盤就會買，\n所以現在我手裡已經有四把鍵盤了 :D\n\n雖然這些鍵盤對我來說沒什麼用，但希望對你來說還算有點用(? 或是等明年送別人:D\n\n新的一年，祝你事事順利，快樂每一天！🎊\n\n這個頁面可以修改儲存後分享給別人，有趣吧:D"
  );
  const [isEditing, setIsEditing] = useState(false); // 編輯狀態
  const [animation, setAnimation] = useState(false); // 動畫狀態

  // 啟動動畫的副作用
  useEffect(() => {
    setAnimation(true);
  }, []); // 空依賴陣列表示只會在組件掛載時執行一次

  // 更新信件內容
  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  // 切換編輯模式
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // 儲存編輯後的內容
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center flex-col p-4 relative">
      {/* 雪花特效 */}
      <Snowflakes />

      {/* Happy New Year 標題設置 */}
      <h1
        className={`text-6xl font-extrabold mb-4 text-center animate__animated ${
          animation ? "animate__fadeIn animate__delay-1s" : ""
        }`}
        style={{
          animation: animation
            ? "bounceIn 1s ease-out, floatUp 2s ease-in-out infinite"
            : "",
          color: "white",
          textShadow:
            "0 0 10px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6)",
        }}
      >
        <span className="text-red-500">H</span>
        <span className="text-yellow-500">A</span>
        <span className="text-blue-500">P</span>
        <span className="text-green-500">P</span>
        <span className="text-purple-500">Y</span>
        <span className="text-pink-500"> </span>
        <span className="text-orange-500">N</span>
        <span className="text-teal-500">E</span>
        <span className="text-indigo-500">W</span>
        <span className="text-cyan-500"> </span>
        <span className="text-lime-500">Y</span>
        <span className="text-yellow-500">E</span>
        <span className="text-red-500">A</span>
        <span className="text-pink-500">R</span>
        <span className="text-green-500"> !!</span>
      </h1>

      {/* 信件容器背景設計 */}
      <div className="bg-yellow-50 text-black max-w-3xl w-full p-8 rounded-lg shadow-lg mt-8">
        {/* 信件內容 */}
        {isEditing ? (
          <textarea
            className="w-full h-60 p-4 border-2 border-gray-300 rounded-md resize-none"
            value={message}
            onChange={handleMessageChange} // 更新信件內容
          />
        ) : (
          <pre className="text-lg text-left mb-4 border-b border-gray-300 pb-2 whitespace-pre-wrap break-words">
            {message}
          </pre>
        )}
      </div>

      {/* 編輯 / 儲存按鈕 */}
      <div className="mt-8 flex space-x-4">
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-green-500 hover:to-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            儲存
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            修改
          </button>
        )}

        {/* 分享按鈕 */}
        <ShareButton content={message} />
      </div>
    </div>
  );
};

export default HappyNewYearPage;
