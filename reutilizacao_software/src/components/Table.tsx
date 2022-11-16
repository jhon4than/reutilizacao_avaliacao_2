import { List } from "./List";
import { DataCats } from "../Data/DataCats";
import { Text } from "./Text";
import { Row } from "./Row";
import { TableProp } from "./TableProp";

export const Table = () => {
  return (
    <TableProp mt={187} height={1000} ml={229} borderRadius={7}>
      <TableProp height={33} ml={10}>
        <Row>
          <Text marginLeft={12} mt={2}>
            Name
          </Text>
          <Text marginLeft={12} mt={2}>
            Age
          </Text>
          <Text marginLeft={12} mt={2}>
            Gender
          </Text>
          <Text marginLeft={12} mt={2}>
            Color
          </Text>
          <Text marginLeft={12} mt={2}>
            ActivityLevel
          </Text>
          <Text marginLeft={12} mt={2}>
            FavoriteFood
          </Text>
        </Row>
      </TableProp>
      <List items={DataCats}></List>
    </TableProp>
  );
};
