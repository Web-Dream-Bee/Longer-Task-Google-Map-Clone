import * as React from 'react';
import * as style from './style.css';
import { RouteComponentProps } from 'react-router';
import { GoogleMapWrapper } from '../GoogleMapContainer';
import { getRestaurant } from '../../utils/API';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
  }
  export interface State {
    center: {
      lat: number,
      lng: number
    };
    zoom: number;
  }
}

class AppContainer extends React.Component<App.Props, App.State> {
  static defaultProps: Partial<App.Props> = {
  };

  componentDidMount() {
    getRestaurant(43,43);
  }
  constructor(props: App.Props, context?: any) {
    super(props, context);
    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    }
  }

  render() {
    return (
      <div className={style.normal}>
        <div className={style.listItem} />
        <div className={style.googleMap} >
          <GoogleMapWrapper/>
        </div>
      </div>
    );
  }
}

export const App = AppContainer