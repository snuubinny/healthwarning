import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostListContainer = styled.div`
  background-color: #fee5ce;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 0px;
`;

const Background = styled.div`
  background-color: #fee5ce;
  border-radius: 20px;
  border-color: #edd6c1;
  border-style: solid;
  padding: 30px;
  width: 1200px;
  height: auto;
`;

const ListText = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ff8f3e;
  color: #ffffff;
  border-radius: 20px;
  opacity: 0.9;
  width: 1240px;
  height: 60px;
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 3px;
  font-size: 30px;
  font-weight: bold;
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

const EmptyBox = styled.div`
  background-color: #fee5ce;
  color:#ff7b00;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  gap: 20px;
  padding: 0px;
  height: 450px;
`;

const Pagination = ({ userId, onPostClick }) => {
  const navigate = useNavigate();
  const handleCreatePostClick = () => {
    navigate("/CreatePost");
  };

  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

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
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

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
          <EmptyBox>
            등록된 포스트가 없습니다
          </EmptyBox>
        )}
      </Background>
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
