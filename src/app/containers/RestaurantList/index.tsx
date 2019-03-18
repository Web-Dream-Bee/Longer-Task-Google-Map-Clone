import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as style from './style.css';
import { ListItem } from 'app/components';
import { connect } from 'react-redux';
import { RestaurantsModel } from 'app/models';

export namespace RestaurantListContainer {
  export interface Props extends RouteComponentProps<void> {
    restaurants: RestaurantsModel[]
  }
  export interface State {
    center: {
      lat: number,
      lng: number
    };
    zoom: number;
  }
  export interface RestaurantListContainerState {
    map: any
  }
}

class RestaurantListContainer extends React.Component<RestaurantListContainer.Props, RestaurantListContainer.State> {
  static defaultProps: Partial<RestaurantListContainer.Props> = {
  };

  constructor(props: RestaurantListContainer.Props, context?: any) {
    super(props, context);
  }

  componentWillReceiveProps(newProps: Partial<RestaurantListContainer.Props>) {
    const oldProps = this.props
    if(oldProps.restaurants !== newProps.restaurants) {
      // console.log(newProps.restaurants);
    }
  }
  render() {
    return (
      <div className={style.listContainer}>
      {
        this.props.restaurants && this.props.restaurants.map((restaurant, index) => (
          <div key={index} className={style.listItemContainer}>
            <ListItem restaurant={restaurant} />
          </div>
        ))
      }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { restaurants: state.restaurants}
}
export const RestaurantList = connect(mapStateToProps)(RestaurantListContainer);