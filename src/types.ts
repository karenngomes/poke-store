export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  price?: number;
  counter_shop?: number;
};

export type Store = {
  totalPrice: { get: number; set: object };
  pokemonShop: { get?: Pokemon[]; set: object };
};
