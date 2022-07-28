import styled from "@emotion/styled";
import React, { useContext } from "react";
import Typography from "../components/Typography/Typography";
import FilterContext from "../context/FilterContext";
import styles from "../styles/index.module.scss";

import { useGetBeerQuery } from "../services/api";
import BeerImage from "./BeerDetails/BeerImage";

const Beer = () => {
  const filter = useContext(FilterContext);

  const beer = useGetBeerQuery(
    {
      id: filter?.beerId ?? "",
    },
    { skip: !filter?.beerId }
  );

  if (beer.isError || !beer.data) {
    return null;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <BeerImage image_url={beer.data[0].image_url} />
        <Details>
          <Typography variant="beerTitle">
            {beer.data[0].name} alc.{beer.data[0].abv}%
          </Typography>
          <Typography variant="paragraph">{beer.data[0].tagline}</Typography>
          <Description>
            <Typography variant="paragraph" color="">
              {beer.data[0].description}
            </Typography>
          </Description>
          <Typography variant="beerTitle">Food Pairing:</Typography>
          <ul>
            {beer.data[0].food_pairing.map((item, id) => {
              return item && <li key={id}>{item}</li>;
            })}
          </ul>
        </Details>
      </div>
    </>
  );
};

export default Beer;

const Details = styled.div``;
const Description = styled.div`
  border: 1px solid;
  border-radius: 2px;
  width: 400px;
  padding: 5px;
  background-color: #dcdcdc;
`;
