import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryCreateNestedManyWithoutProductsInput } from "./InventoryCreateNestedManyWithoutProductsInput";
import { InventoryTransactionCreateNestedManyWithoutProductsInput } from "./InventoryTransactionCreateNestedManyWithoutProductsInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  inventories?: InventoryCreateNestedManyWithoutProductsInput;
  inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutProductsInput;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  quantity?: number | null;
  sku?: string | null;
  supplier?: SupplierWhereUniqueInput | null;
};
