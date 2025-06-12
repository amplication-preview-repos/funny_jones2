import * as graphql from "@nestjs/graphql";
import { InventoryTransactionResolverBase } from "./base/inventoryTransaction.resolver.base";
import { InventoryTransaction } from "./base/InventoryTransaction";
import { InventoryTransactionService } from "./inventoryTransaction.service";

@graphql.Resolver(() => InventoryTransaction)
export class InventoryTransactionResolver extends InventoryTransactionResolverBase {
  constructor(protected readonly service: InventoryTransactionService) {
    super(service);
  }
}
