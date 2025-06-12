import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryTransactionUpdateManyWithoutProductsInput } from "./InventoryTransactionUpdateManyWithoutProductsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  inventoryTransactions?: InventoryTransactionUpdateManyWithoutProductsInput;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  sku?: string | null;
  supplier?: SupplierWhereUniqueInput | null;
};
