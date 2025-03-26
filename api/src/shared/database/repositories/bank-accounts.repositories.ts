import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(CreateBankAccountDto: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(CreateBankAccountDto);
  }

  findMany(findManyDto: Prisma.BankAccountFindManyArgs) {
    return this.prismaService.bankAccount.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.BankAccountFindFirstArgs) {
    return this.prismaService.bankAccount.findFirst(findFirstDto);
  }

  update(updateBankAccountDto: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updateBankAccountDto);
  }

  delete(removeBankAccountDto: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(removeBankAccountDto);
  }
}
