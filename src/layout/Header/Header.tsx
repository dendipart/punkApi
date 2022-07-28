import styled from "@emotion/styled";
import Link from "next/link";
import React, { ChangeEvent, useContext } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import FilterContext from "../../context/FilterContext";

const Header = () => {
  const filter = useContext(FilterContext);

  if (!filter) {
    return null;
  }

  const handleChangeSearchBar = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    filter.setSearchValue(event.target.value);
  };

  return (
    <Div>
      <Link href="/">
        <Title>Search for BEER</Title>
      </Link>

      <form action="#">
        <SearchbarDiv>
          <Searchbar onChange={handleChangeSearchBar} />
          <Button onClick={filter.handleSubmit}>Go</Button>
        </SearchbarDiv>
      </form>
    </Div>
  );
};

export default Header;

const Div = styled.div`
  background-image: url(https://www.aspenwords.org/wp-content/uploads/2017/12/2017-12-01-15-49-www.aspeninstitute.org_.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 200px;
`;
const Title = styled.h2`
  display: flex;
  margin: 20px;
  font-size: 50px;
  color: white;
  cursor: pointer;
`;
const SearchbarDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  margin-left: -40px;
  height: 24px;
  width: 40px;
  margin-top: 0px;
`;
const SelectDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
