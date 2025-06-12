import { Category } from "../category/Category";
import { Inventory } from "../inventory/Inventory";
import { InventoryTransaction } from "../inventoryTransaction/InventoryTransaction";
import { Order } from "../order/Order";
import { Supplier } from "../supplier/Supplier";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  inventories?: Array<Inventory>;
  inventoryTransactions?: Array<InventoryTransaction>;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  quantity: number | null;
  sku: string | null;
  supplier?: Supplier | null;
  updatedAt: Date;
};
