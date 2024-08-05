import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostListContainer = styled.div`
  display: grid;
  height: auto;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  padding: 0px;
`;

const PageButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
`;

const LeftPageButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const RightPageButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const PageText = styled.h3``;

const PostButtonContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
`;

const PostButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 190px;
  height: 50px;
  margin-right: 140px;
  margin-top: 20px;
  font-size: large;
  font-weight: bold;
  border-radius: 10px;
  border-style: none;
  background-color: #ff832b;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
`;

const PostText = styled.div``;

const ButtonPNG = styled.img`
  display: flex;
  align-items: flex-end;
  filter: invert(1) brightness(2);
`;

const Pagination = ({ userId, onPostClick }) => {
  const navigate = useNavigate();
  const handleCreatePostClick = () => {
    navigate("/CreatePost");
  };

  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 15;

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      console.log("Token:", token); // 토큰 값 확인용

      try {
        const response = await axios.get(
          "https://dahaessyu.kro.kr/blog/main/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCards(response.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // 현재 페이지에 해당하는 카드 계산
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // 페이지 변경 핸들러
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <PostListContainer>
        {currentCards.map((card) => (
          <Card
            key={card.id}
            data={card}
            onClick={onPostClick} // onClick 핸들러 전달
          />
        ))}
      </PostListContainer>
      <PostButtonContainer>
        <PostButton onClick={handleCreatePostClick}>
          <PostText>오늘의 글 작성</PostText>
          <ButtonPNG
            src={`${process.env.PUBLIC_URL}/write.png`}
            alt="pen"
            width="20"
            height="20"
          />
        </PostButton>
      </PostButtonContainer>
      <PageButtonContainer>
        <LeftPageButton
          src={`${process.env.PUBLIC_URL}/leftbutton.png`}
          alt="left"
          onClick={() =>
            paginate(currentPage > 1 ? currentPage - 1 : currentPage)
          }
        />
        <PageText>{currentPage}</PageText>
        <RightPageButton
          src={`${process.env.PUBLIC_URL}/rightbutton.png`}
          alt="right"
          onClick={() =>
            paginate(
              currentPage < Math.ceil(cards.length / cardsPerPage)
                ? currentPage + 1
                : currentPage
            )
          }
        />
      </PageButtonContainer>
    </>
  );
};

export default Pagination;
