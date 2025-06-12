import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastUpdated?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
