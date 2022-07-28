export interface BeerQueryParams {
  query?: string;
  startIndex?: number;
  id?: string;
}

export interface BeersQueryResponse {
  data?: ItemBeer[];
}

export interface ItemBeer {
  id: string;
  name: string;
  description: string;
  image_url: string;
  tagline: string;
  abv: string;
  food_pairing: [];
}
