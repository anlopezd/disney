import React from "react";
import styled from "styled-components";

const MovieTrailer = ({ closeTrailer, trailer }) => {
  const handlerTrailer = () => {
    closeTrailer(false);
  };

  return (
    <Container>
      <Button onClick={handlerTrailer}>X</Button>
      <TrailerContainer>
        <Trailer
          src={trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write;
           encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </TrailerContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 80px;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TrailerContainer = styled.div`
  width: 900px;
  margin: 50px 0;


`;
const Trailer = styled.iframe`
  width: 100%;
  height: 450px;

  @media screen and (max-width: 480px) {
    width: 350px;
    height: 300px;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 60px;
  top: 100px;
  padding: 8px 16px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1.4rem;

  @media screen and (max-width: 480px) {
    right: 0;
  }
`;

export default MovieTrailer;
