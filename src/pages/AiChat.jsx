import React, { useState } from "react";
import styled from "styled-components";
import AIPage from "../img/AI Chat.png";

const FullScreenImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

function AiChat() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    alert("추후 개발할 예정입니다!");
  };

  return (
    <>
      <FullScreenImage src={AIPage} alt="AI Page" onLoad={handleImageLoad} />
    </>
  );
}

export default AiChat;
