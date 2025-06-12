import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryUpdateInput = {
  lastUpdated?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
