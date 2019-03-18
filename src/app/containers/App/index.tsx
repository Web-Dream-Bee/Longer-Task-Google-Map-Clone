import * as React from 'react';
import * as style from './style.css';
import { RouteComponentProps } from 'react-router';
import { GoogleMapWrapper } from '../GoogleMapContainer';
import { RestaurantList } from '../RestaurantList';
import { getRestaurant } from '../../utils/API';
import { omit } from '../../utils';
import { connect } from 'react-redux';
import { RestaurantActions } from 'app/actions/restaurants';
import { bindActionCreators, Dispatch } from 'redux';

export namespace AppContainer {
  export interface Props extends RouteComponentProps<void> {
    actions: RestaurantActions
  }
  export interface State {
    center: {
      lat: number,
      lng: number
    };
    zoom: number;
  }
}

class AppContainer extends React.Component<AppContainer.Props, AppContainer.State> {
  static defaultProps: Partial<AppContainer.Props> = {
  };

  componentDidMount() {
    const { center } = this.state;
    getRestaurant(center.lat,center.lng).then(restaurants => {
      this.props.actions.addRestaurant({...restaurants});
    });
  }
  constructor(props: AppContainer.Props, context?: any) {
    super(props, context);
    this.state = {
      center: {
        lat: 27.664827,
        lng: -81.515755
      },
      zoom: 11
    }
  }

  render() {
    return (
      <div className={style.normal}>
        <div className={style.listItem}>
          <RestaurantList />
        </div>
        <div className={style.googleMap}>
          <GoogleMapWrapper />
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Dispatch) : Pick<AppContainer.Props, 'actions'> => ({
    actions : bindActionCreators(omit(RestaurantActions, 'Type'), dispatch)
  }
)
export const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);