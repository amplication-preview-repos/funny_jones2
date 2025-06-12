import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InventoryTransactionServiceBase } from "./base/inventoryTransaction.service.base";

@Injectable()
export class InventoryTransactionService extends InventoryTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
