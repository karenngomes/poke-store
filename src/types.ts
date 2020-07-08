export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  price?: number;
  counter_shop?: number;
};
