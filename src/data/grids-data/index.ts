import gridContinuouslyAggressive from 'src/data/grids-data/continuously-aggressive.ts';
import gridContinuouslyModerate from 'src/data/grids-data/continuously-moderate.ts';
import gridFalling from 'src/data/grids-data/grid-falling.ts';
import gridGrowing from 'src/data/grids-data/grid-growing.ts';
import gridNeutralAggressive from 'src/data/grids-data/grid-neutral-aggressive.ts';
import gridNeutralPassive from 'src/data/grids-data/grid-neutral-passive.ts';
import gridStronglyGrowing from 'src/data/grids-data/grid-strongly-growing.ts';
import { IGrid } from 'src/types/grid.types.ts';

const grids: IGrid[] = [
  // {
  //   items: gridDefault,
  //   key: 'default',
  //   name: '1-1-1 на 100 позиций',
  // },
  // {
  //   items: gridVectrum,
  //   key: 'vectrum',
  //   name: 'Vectrum на 90 позиций',
  // },
  // {
  //   items: gridAuthor,
  //   key: 'authors',
  //   name: 'Авторская',
  // },
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
  {
    items: gridContinuouslyModerate,
    key: 'continuously-moderate',
    name: 'Непрерывная умеренная',
  },
  {
    items: gridContinuouslyAggressive,
    key: 'continuously-aggressive',
    name: 'Непрерывная агрессивная',
  },
];

export const gridMap = grids.reduce<Record<string, IGrid>>((acc, grid) => {
  acc[grid.key] = grid;
  return acc;
}, {});

export default grids;
