import styled from "@emotion/styled";
import React from "react";
import { ItemBeer } from "../../declarations/beerApi";
import Typography from "../Typography/Typography";

interface Props {
  data: ItemBeer;
  onClick: () => void;
}

const BeerItem = ({ data, onClick }: Props) => {
  let description = data.description;
  if (description.length > 140) {
    description = description.slice(0, 140) + "...";
  }
  return (
    <Wrapper>
      <BeerImage src={data.image_url} onClick={onClick} />
      <Details>
        <Typography variant="beerItemTitle" color="black" onClick={onClick}>
          {data.name}
        </Typography>
        <Typography variant="default" color="black">
          {description}
        </Typography>
      </Details>
    </Wrapper>
  );
};

export default BeerItem;

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 300px;
  width: 200px;
  margin: 0 auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const BeerImage = styled.img`
  height: 180px;
  width: 30%;
  cursor: pointer;
  margin: 0 auto;
`;

const Details = styled.div``;
