import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  soldBy?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
