import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(CreateTransactionDto: Prisma.TransactionCreateArgs) {
    return this.prismaService.transaction.create(CreateTransactionDto);
  }

  findMany(findManyDto: Prisma.TransactionFindManyArgs) {
    return this.prismaService.transaction.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.TransactionFindFirstArgs) {
    return this.prismaService.transaction.findFirst(findFirstDto);
  }

  update(updateTransactionDto: Prisma.TransactionUpdateArgs) {
    return this.prismaService.transaction.update(updateTransactionDto);
  }

  delete(removeTransactionDto: Prisma.TransactionDeleteArgs) {
    return this.prismaService.transaction.delete(removeTransactionDto);
  }
}
