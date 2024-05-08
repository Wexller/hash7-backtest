import { IGridItem } from 'src/types/grid.types.ts';

const gridContinuouslyModerate: IGridItem[] = Array.from(
  { length: 69 },
  (_, i) => ({
    buy: i === 0 ? 0 : 1,
    multiplier: 1,
    sell: 1,
  }),
);

export default gridContinuouslyModerate;
