import * as React from 'react';
import * as style from './style.css';
import { RestaurantsModel } from 'app/models';

export namespace ListItem {
  export interface Props {
    restaurant: RestaurantsModel;
  }
}

export class ListItem extends React.Component<ListItem.Props> {
  constructor(props: ListItem.Props, context?: any) {
    super(props, context);
    this.starShow = this.starShow.bind(this);
  }

  starShow = (percent: number) => (
    <span className={style.starRating} title="70%">
      <div className={style.backStars}>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>

        <div className={style.frontStars} style={{width: percent / 5 * 100 + '%'}}>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
        </div>
      </div>
    </span>
  )
  render() {
    const { restaurant } = this.props;
    return (
      <React.Fragment>
        <div className={style.listViewContent}>
          <h1>{restaurant.name}</h1>
          <span>{this.starShow(restaurant.rating)} ({restaurant.review_count}) - ({restaurant.price ? restaurant.price : '?'}) - {restaurant.location.display_address}</span>
        </div>
        <div className={style.listViewImage}>
          <img src={restaurant.image_url} />
        </div>
      </React.Fragment>
    );
  }
}
