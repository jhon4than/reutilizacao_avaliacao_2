import { ColumnDefinitionType } from "../components/NewTable/NewTable";
import { Cat } from "../Interfaces/Cat";

export const DataColumnCats: ColumnDefinitionType<Cat, keyof Cat>[] = [
    {
      key: 'name',
      header: 'Name',
      width: 150
    },
    {
      key: 'age',
      header: 'Age in years',
      width: 150
    },
    {
      key: 'color',
      header: 'Color',
      width: 150
    },
    {
      key: 'gender',
      header: 'Gender',
      width: 150
    },
    {
      key: 'activityLevel',
      header: 'ActivityLevel',
      width: 150
    },
    {
      key: 'favoriteFood',
      header: 'Favorite Food',
      width: 150
    }
  ]