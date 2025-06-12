import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InventoryTransactionListRelationFilter } from "../inventoryTransaction/InventoryTransactionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  inventoryTransactions?: InventoryTransactionListRelationFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  sku?: StringNullableFilter;
  supplier?: SupplierWhereUniqueInput;
};
