export interface IGridItem {
  buy: number;
  sell: number;
  multiplier: number;
}

export interface IGrid {
  key: string;
  name: string;
  items: IGridItem[];
}

export interface IGridListItem {
  key: string;
  name: string;
}
