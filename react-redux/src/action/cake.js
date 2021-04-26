import { BUY_CAKE } from "../constant/cake";

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  };
};
