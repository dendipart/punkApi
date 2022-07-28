import styled from "@emotion/styled";
import React from "react";

const Searchbar = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return <Search {...props} />;
};

export default Searchbar;

const Search = styled.input`
  height: 20px;
  width: 300px;
  display: flex;
`;
