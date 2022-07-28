import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type TypographyVariants =
  | "heading"
  | "label"
  | "beerTitle"
  | "beerItemTitle"
  | "paragraph"
  | "underline"
  | "default";

interface Props {
  variant: TypographyVariants;
  children: ReactNode;
  color?: string;
  onClick?: () => void;
}

const Typography = ({ variant, color, children }: Props) => {
  switch (variant) {
    case "heading":
      return <Heading color={color}>{children}</Heading>;
    case "label":
      return <Label color={color}>{children}</Label>;
    case "beerTitle":
      return <BookTitle color={color}>{children}</BookTitle>;
    case "beerItemTitle":
      return <BookItemTitle color={color}>{children}</BookItemTitle>;
    case "underline":
      return <Underline color={color}>{children}</Underline>;
    default:
      return <Paragraph color={color}>{children}</Paragraph>;
  }
};

export default Typography;

const Heading = styled.h2``;
const Label = styled.p`
  color: ${({ color }) => color};
`;
const BookTitle = styled.h2`
  font-size: 25px;
`;
const BookItemTitle = styled.h3`
  font-size: 18px;
  cursor: pointer;
  line-height: 15px;
`;
const Paragraph = styled.p`
  font-size: 10px;
`;
const Underline = styled.p`
  text-decoration: underline;
  color: ${({ color }) => color};
`;
