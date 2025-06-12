import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InventoryTransactionService } from "./inventoryTransaction.service";
import { InventoryTransactionControllerBase } from "./base/inventoryTransaction.controller.base";

@swagger.ApiTags("inventoryTransactions")
@common.Controller("inventoryTransactions")
export class InventoryTransactionController extends InventoryTransactionControllerBase {
  constructor(protected readonly service: InventoryTransactionService) {
    super(service);
  }
}
