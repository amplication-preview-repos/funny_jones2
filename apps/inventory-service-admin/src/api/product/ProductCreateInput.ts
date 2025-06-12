import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryTransactionCreateNestedManyWithoutProductsInput } from "./InventoryTransactionCreateNestedManyWithoutProductsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutProductsInput;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  sku?: string | null;
  supplier?: SupplierWhereUniqueInput | null;
};
