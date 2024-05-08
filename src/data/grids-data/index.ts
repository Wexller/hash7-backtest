import gridAuthor from 'src/data/grids-data/grid-author.ts';
import gridDefault from 'src/data/grids-data/grid-default.ts';
import gridFalling from 'src/data/grids-data/grid-falling.ts';
import gridGrowing from 'src/data/grids-data/grid-growing.ts';
import gridNeutralAggressive from 'src/data/grids-data/grid-neutral-aggressive.ts';
import gridNeutralPassive from 'src/data/grids-data/grid-neutral-passive.ts';
import gridStronglyGrowing from 'src/data/grids-data/grid-strongly-growing.ts';
import gridVectrum from 'src/data/grids-data/grid-vectrum.ts';
import { IGrid, IGridItem } from 'src/types/grid.types.ts';

const grids: IGrid[] = [
  {
    items: gridDefault,
    key: 'default',
    name: '1-1-1 на 100 позиций',
  },
  {
    items: gridVectrum,
    key: 'vectrum',
    name: 'Vectrum на 90 позиций',
  },
  {
    items: gridAuthor,
    key: 'authors',
    name: 'Авторская',
  },
  {
    items: gridNeutralPassive,
    key: 'neutral-passive',
    name: 'Нейтральный рынок (пассивная)',
  },
  {
    items: gridNeutralAggressive,
    key: 'neutral-aggressive',
    name: 'Нейтральный рынок (агрессивная)',
  },
  {
    items: gridFalling,
    key: 'falling',
    name: 'Падающий рынок',
  },
  {
    items: gridGrowing,
    key: 'growing',
    name: 'Растущий рынок',
  },
  {
    items: gridStronglyGrowing,
    key: 'strongly-growing',
    name: 'Сильно растущий рынок',
  },
];

export const gridMap = grids.reduce<Record<string, IGridItem[]>>(
  (acc, grid) => {
    acc[grid.key] = grid.items;
    return acc;
  },
  {},
);

export default grids;
