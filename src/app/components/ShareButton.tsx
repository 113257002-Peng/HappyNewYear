import React from "react";

interface ShareButtonProps {
  content: string; // 這是要分享的內容
}

const ShareButton: React.FC<ShareButtonProps> = ({ content }) => {
  const handleShare = async () => {
    // 構建 LINE 的分享 URL（適用於手機）
    const lineUrl = `line://msg/text/${encodeURIComponent(
      content
    )}%0A${encodeURIComponent(window.location.href)}`;

    // 檢查是否是移動設備
    if (
      navigator.userAgent.match(/android/i) ||
      navigator.userAgent.match(/iphone/i)
    ) {
      // 在手機上直接打開 LINE 應用
      window.location.href = lineUrl;
    } else {
      // 如果是桌面設備，使用 LINE 分享頁面
      const desktopUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
        window.location.href
      )}&text=${encodeURIComponent(content)}`;
      window.open(desktopUrl, "_blank");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-yellow-600 transition duration-300"
    >
      分享這封信
    </button>
  );
};

export default ShareButton;
