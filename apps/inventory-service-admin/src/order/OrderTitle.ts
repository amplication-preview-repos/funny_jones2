import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "soldBy";

export const OrderTitle = (record: TOrder): string => {
  return record.soldBy?.toString() || String(record.id);
};
