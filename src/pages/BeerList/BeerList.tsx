import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import BeerItem from "../../components/BeerItem";
import FilterContext from "../../context/FilterContext";
import { ItemBeer } from "../../declarations/beerApi";
import { PAGINATION_STEP } from "../../hooks/useFilter";

const BeerList = () => {
  const [beerItems, setBeerItems] = useState<ItemBeer[]>([]);

  const filter = useContext(FilterContext);

  useEffect(() => {
    if (filter.data) {
      filter.fetchedMore
        ? setBeerItems([...beerItems, ...filter.data])
        : setBeerItems(filter.data);
    } else {
      setBeerItems([]);
    }
  }, [filter?.data]);

  if (!filter) {
    return null;
  }

  const { setStartIndex, startIndex, isError, isFetching } = filter;

  const handleClickFetchMore = (): void => {
    filter.setFetchedMore(true);
    setStartIndex(startIndex + PAGINATION_STEP);
  };

  const handleClickBeerItem = (id: string) => () => {
    filter.setBeerId(id);
  };

  if (isError) {
    return <div>Error. Please, try again.</div>;
  }

  return (
    <>
      <Wrapper isFetching={isFetching}>
        <Spinner isFetching={isFetching}>Loading...</Spinner>
        <BookItemList>
          {beerItems.map((item) => {
            return (
              item && (
                <Link href="/beer" key={item.id + 1000}>
                  <BeerItem
                    data={item}
                    key={item.id}
                    onClick={handleClickBeerItem(item.id)}
                  />
                </Link>
              )
            );
          })}
        </BookItemList>
        <Button onClick={handleClickFetchMore}>Load more</Button>
      </Wrapper>
    </>
  );
};

export default BeerList;

const BookItemList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 14px;
`;

const Wrapper = styled.div<{ isFetching: boolean }>``;

const Spinner = styled.div<{ isFetching: boolean }>`
  display: ${({ isFetching }) => (isFetching ? "block" : "none")};
`;

const Button = styled.button`
  height: 40px;
  width: 140px;
  margin: 0 auto;
`;
