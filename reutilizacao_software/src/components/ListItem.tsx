import React from "react";
import { Column } from "./Column";
import { Row } from "./Row";
import { Text } from "./Text";

export type ListItemProps = {
  name: string;
  age: number;
  gender: string;
  color: string;
  activityLevel?: string;
  favoriteFood?: string;
};

export const ListItem: React.FC<ListItemProps> = ({
  name,
  age,
  gender,
  color,
  activityLevel,
  favoriteFood,
}) => {
  return (
    <Column width="100%" p="10px" mb="8px" cursor="pointer">
      <Row>
        <Text marginLeft={12}>{name}</Text>
        <Text marginLeft={12}>{age}</Text>
        <Text marginLeft={22}>{gender}</Text>
        <Text marginLeft={22}>{color}</Text>
        <Text marginLeft={52}>{activityLevel}</Text>
        <Text marginLeft={102}>{favoriteFood}</Text>
      </Row>
    </Column>
  );
};
