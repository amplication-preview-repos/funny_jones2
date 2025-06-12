import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  product?: Product | null;
  quantity: number | null;
  soldBy: string | null;
  totalPrice: number | null;
  updatedAt: Date;
};
