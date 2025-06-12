import { InventoryTransactionWhereInput } from "./InventoryTransactionWhereInput";
import { InventoryTransactionOrderByInput } from "./InventoryTransactionOrderByInput";

export type InventoryTransactionFindManyArgs = {
  where?: InventoryTransactionWhereInput;
  orderBy?: Array<InventoryTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
