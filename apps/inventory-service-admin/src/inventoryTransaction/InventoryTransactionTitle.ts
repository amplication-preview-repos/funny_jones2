import { InventoryTransaction as TInventoryTransaction } from "../api/inventoryTransaction/InventoryTransaction";

export const INVENTORYTRANSACTION_TITLE_FIELD = "id";

export const InventoryTransactionTitle = (
  record: TInventoryTransaction
): string => {
  return record.id?.toString() || String(record.id);
};
