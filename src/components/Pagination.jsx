import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostListContainer = styled.div`
  background-color: #ffd6b0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  padding: 0px;
  overflow-x: auto;
  white-space: nowrap;

  /* Webkit 기반 브라우저 (Chrome, Safari, Edge 등) */
  ::-webkit-scrollbar {
    height: 8px; /* 스크롤바의 높이 (가로 스크롤) */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* 스크롤바 트랙 (배경) 색상 */
    border-radius: 10px; /* 트랙의 모서리 둥글게 */
  }

  ::-webkit-scrollbar-thumb {
    background: #6b6b6b; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 모서리 둥글게 */
  }

  scrollbar-width: thin; /* 스크롤바 너비 */
  scrollbar-color: #ff8f3e #ffffff; /* 스크롤바 색상 (스크롤바 색상, 트랙 색상) */
`;

const Background = styled.div`
  background-color: #ffd6b0;
  border-radius: 20px;
  border-color: #edd6c1;
  border-style: solid;
  padding: 15px;
  width: 320px;
  height: auto;
  overflow-x: auto;
  margin-left: 37px;
`;

const ListText = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ff8f3e;
  color: #ffffff;
  border-radius: 10px;
  opacity: 0.9;
  width: 320px;
  height: 20px;
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: bold;
  margin-left: 40px;
`;

const EmptyBox = styled.div`
  background-color: #fee5ce;
  color: #ff7b00;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  gap: 20px;
  padding: 0px;
  height: 150px;
`;

const PageButtonContainer = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const LeftPageButton = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const RightPageButton = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const PageText = styled.p`
font-size: 15px;
`;

const Pagination = ({ userId, onPostClick }) => {
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;
  const maxCardsToShow = 10;

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      console.log("Token:", token);

      try {
        const response = await axios.get(
          "https://healthwarning.kro.kr/blog/main/",
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

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards
    .slice(indexOfFirstCard, indexOfLastCard)
    .slice(0, maxCardsToShow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ListText>지난 달성률 한눈에 확인하기&#128064;</ListText>
      <Background>
        {cards.length > 0 ? (
          <PostListContainer>
            {currentCards.map((card, index) => (
              <Card key={index} data={card} onClick={onPostClick} />
            ))}
          </PostListContainer>
        ) : (
          <EmptyBox>등록된 포스트가 없습니다</EmptyBox>
        )}
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
      </Background>
    </>
  );
};

export default Pagination;
