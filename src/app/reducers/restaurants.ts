import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { RestaurantActions } from 'app/actions/restaurants';
import { RestaurantsModel } from 'app/models';

const initialState: RootState.RestaurantsState = [];

export const restaurantReducer = handleActions<RootState.RestaurantsState, RestaurantsModel>(
  {
    [RestaurantActions.Type.ADD_RESTAURANT]: (state, action: any) => {
      if (action.payload) {
        return Object.keys(action.payload).map(i => action.payload[i])
      }
      return state;
    },
    [RestaurantActions.Type.CLEAR_ALL]: () => {
      return [];
    }
  },
  initialState
);
