import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import {compose, withProps} from 'recompose';
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

export namespace GoogleMapContainer {
  export interface Props extends RouteComponentProps<void> {
  }
  export interface State {
    center: {
      lat: number,
      lng: number
    };
    zoom: number;
  }
  export interface SearchBoxState {
    map: any
  }
}

class GoogleMapContainer extends React.Component<GoogleMapContainer.Props, GoogleMapContainer.State> {
  static defaultProps: Partial<GoogleMapContainer.Props> = {
  };

  private searchBoxRef: any;
  constructor(props: GoogleMapContainer.Props, context?: any) {
    super(props, context);
    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    }
    this.searchBoxRef = React.createRef<any>();
    this.onSearchBoxMounted = this.onSearchBoxMounted.bind(this);
    this.onMapMounted = this.onMapMounted.bind(this);
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
  }

  componentWillMount() {
  }

  onSearchBoxMounted(ref : any) {
   this.searchBoxRef = ref;
  }

  onMapMounted(ref: any) {
    this.searchBoxRef.map = ref;
  }
  onPlacesChanged() {
  }
  render() {
    const { center, zoom } = this.state;
    return (
        <GoogleMap
          defaultZoom={zoom}
          defaultCenter={center}
          ref={this.onMapMounted}
          >
            <SearchBox
              ref={this.onSearchBoxMounted}
              bounds={undefined}
              controlPosition={google.maps.ControlPosition.TOP_LEFT}
              onPlacesChanged={this.onPlacesChanged}
            >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>
        </GoogleMap>
    );
  }
}

export const GoogleMapWrapper = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDNu6dJYaFoDhTFIYME8JZTB74y8wZ83ZY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMapContainer />
);
