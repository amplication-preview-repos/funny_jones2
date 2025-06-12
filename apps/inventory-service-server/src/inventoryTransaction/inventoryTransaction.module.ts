import { Module } from "@nestjs/common";
import { InventoryTransactionModuleBase } from "./base/inventoryTransaction.module.base";
import { InventoryTransactionService } from "./inventoryTransaction.service";
import { InventoryTransactionController } from "./inventoryTransaction.controller";
import { InventoryTransactionResolver } from "./inventoryTransaction.resolver";

@Module({
  imports: [InventoryTransactionModuleBase],
  controllers: [InventoryTransactionController],
  providers: [InventoryTransactionService, InventoryTransactionResolver],
  exports: [InventoryTransactionService],
})
export class InventoryTransactionModule {}
