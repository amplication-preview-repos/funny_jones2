import { Category } from "../category/Category";
import { InventoryTransaction } from "../inventoryTransaction/InventoryTransaction";
import { Supplier } from "../supplier/Supplier";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  inventoryTransactions?: Array<InventoryTransaction>;
  name: string | null;
  price: number | null;
  quantity: number | null;
  sku: string | null;
  supplier?: Supplier | null;
  updatedAt: Date;
};
