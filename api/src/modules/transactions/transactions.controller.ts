import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TransactionsService } from './services/transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ActiveUserId } from 'src/shared/decorators/activeUserId';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(
    @ActiveUserId() userId: string,
    @Body() createTransactionDto: CreateTransactionDto,
  ) {
    return this.transactionsService.create(userId, createTransactionDto);
  }

  @Get()
  findAll(@ActiveUserId() userId: string) {
    return this.transactionsService.findAllByUserId(userId);
  }

  @Put(':transactionsId')
  update(
    @ActiveUserId() userId: string,
    @Param('transactionsId', ParseUUIDPipe) transactionsId: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.update(
      userId,
      transactionsId,
      updateTransactionDto,
    );
  }

  @Delete(':transactionsId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @ActiveUserId() userId: string,
    @Param('transactionsId', ParseUUIDPipe) transactionsId: string,
  ) {
    return this.transactionsService.remove(userId, transactionsId);
  }
}
