import { ColumnDefinitionType } from "../components/NewTable/NewTable";
import { Car } from "../Interfaces/Car";

export const DataColumnCars: ColumnDefinitionType<Car, keyof Car>[] = [
    {
      key: 'name',
      header: 'Nome',
      width: 150
    },
    {
      key: 'year',
      header: 'Ano',
      width: 150
    },
    {
      key: 'color',
      header: 'Cor',
      width: 150
    },
    {
      key: 'brand',
      header: 'Marca',
      width: 150
    }
  ]