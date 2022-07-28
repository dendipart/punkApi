import styled from "@emotion/styled";
import React from "react";

interface Props {
  image_url: string;
}

const BeerImage = ({ image_url }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Image src={image_url} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const Image = styled.img`
  margin: 50px;
  width: 50%;
`;

export default BeerImage;
