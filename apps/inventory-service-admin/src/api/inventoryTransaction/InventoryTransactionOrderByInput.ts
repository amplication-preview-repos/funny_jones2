import { SortOrder } from "../../util/SortOrder";

export type InventoryTransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  transactionDate?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
