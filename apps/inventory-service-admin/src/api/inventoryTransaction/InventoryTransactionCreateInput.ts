import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryTransactionCreateInput = {
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  transactionDate?: Date | null;
  typeField?: "Option1" | null;
};
