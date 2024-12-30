"use client";

import React from "react";

const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Happy New Year",
          text: "Wishing you all the best in the new year!",
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      alert("Share functionality is not supported on this device.");
    }
  };

  return (
    <button onClick={handleShare} className="share-button">
      Share
    </button>
  );
};

export default ShareButton;
