import { Product } from "../product/Product";

export type InventoryTransaction = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  quantity: number | null;
  transactionDate: Date | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
