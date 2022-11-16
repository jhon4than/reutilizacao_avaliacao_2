import { ListItem } from "./ListItem";
import React from "react";
import { Cat } from "../Interfaces/Cat";
import { Column } from "./Column";

type ListProps = {
  items: Cat[];
};

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <Column py="55px">
      {items.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </Column>
  );
};
