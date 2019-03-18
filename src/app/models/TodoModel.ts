
/** TodoMVC model definitions **/

export interface RestaurantsModel {
  id: number;
  alias: string;
  categories: [];
  display_phone: string;
  distance: number;
  image_url: string;
  is_closed: boolean;
  location: {
    display_address: any;
  };
  name: string;
  phone: string;
  price: string;
  rating: number;
  review_count: number;
  transactions: [];
  url: string;
}
