import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img``;

const Map = (props) => {
  return (
    <Container>
      <Img src={props.urlMapImage} alt="Map Image" />
    </Container>
  );
};

export default Map;
