import { BeerQueryParams } from "./../declarations/beerApi";
import { useState } from "react";

import { ItemBeer, BeersQueryResponse } from "../declarations/beerApi";
import { useGetBeersQuery } from "../services/api";

export interface UseFilter {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  data?: any;
  isError: boolean;
  isFetching: boolean;
  handleSubmit: () => void;
  fetchedMore: boolean;
  setFetchedMore: React.Dispatch<React.SetStateAction<boolean>>;
  beerId: string;
  setBeerId: React.Dispatch<React.SetStateAction<string>>;
}

export const PAGINATION_STEP = 1;

export const useFilter = (): UseFilter => {
  const [beerId, setBeerId] = useState("");
  const [query, setQuery] = useState("");
  const [startIndex, setStartIndex] = useState(1);

  const [searchValue, setSearchValue] = useState("");
  const [fetchedMore, setFetchedMore] = useState(false);

  const beerList = useGetBeersQuery(
    {
      query: query ?? "",
      startIndex,
    },
    { skip: !query }
  );

  const handleSubmit = () => {
    setQuery(searchValue);
    setFetchedMore(false);
  };

  return {
    data: beerList.data,
    beerId,
    setBeerId,
    query,
    setQuery,
    startIndex,
    setStartIndex,
    isError: beerList.isError,
    isFetching: beerList.isFetching,
    handleSubmit,
    setSearchValue,
    searchValue,
    fetchedMore,
    setFetchedMore,
  };
};
