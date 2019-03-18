import { createAction } from 'redux-actions';

export namespace RestaurantActions {
  export enum Type {
    ADD_RESTAURANT = 'ADD_RESTAURANT',
    CLEAR_ALL = 'CLEAR_ALL'
  }

  export const addRestaurant = createAction(Type.ADD_RESTAURANT);
  export const clearAll = createAction(Type.CLEAR_ALL);
}

export type RestaurantActions = Omit<typeof RestaurantActions, 'Type'>;
