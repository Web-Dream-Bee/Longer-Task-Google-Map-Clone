import { RestaurantsModel } from 'app/models';

export interface RootState {
  restaurants: RootState.RestaurantsState;
  router?: any;
}

export namespace RootState {
  export type RestaurantsState = RestaurantsModel[];
}
