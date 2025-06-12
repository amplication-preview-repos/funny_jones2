import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryCreateInput = {
  lastUpdated?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
