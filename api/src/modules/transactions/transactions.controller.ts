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
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { TransactionsService } from './services/transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ActiveUserId } from 'src/shared/decorators/activeUserId';
import { OptionalParseUUIDPipe } from 'src/shared/pipes/optionalParseUUIDPipe';
import { TransactionType } from './entities/transaction';
import { OptionalParseEnumPipe } from 'src/shared/pipes/optionalParseEnumPipe';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseTransactionDto } from './dto/response-transaction.dto';

@ApiBearerAuth()
@ApiTags('Transactions')
@ApiHeader({
  name: 'Authorization',
  description: 'JWT token in the format: Bearer <token>',
  required: true,
})
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @ApiOperation({ summary: 'Create transaction' })
  @ApiResponse({
    status: 201,
    type: CreateTransactionDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Token not found',
  })
  @Post()
  create(
    @ActiveUserId() userId: string,
    @Body() createTransactionDto: CreateTransactionDto,
  ) {
    return this.transactionsService.create(userId, createTransactionDto);
  }

  @ApiOperation({ summary: 'Get all transactions for a given month/year' })
  @ApiResponse({
    status: 200,
    description:
      'List of user transactions filtered by month/year and optionally by bankAccountId and type',
    type: ResponseTransactionDto,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Token not found or invalid',
  })
  @ApiQuery({
    name: 'month',
    type: Number,
    required: true,
    description: 'Month number (1-12)',
  })
  @ApiQuery({
    name: 'year',
    type: Number,
    required: true,
    description: 'Year in YYYY format',
  })
  @ApiQuery({
    name: 'bankAccountId',
    type: String,
    required: false,
    description: 'Optional UUID of a bank account',
  })
  @ApiQuery({
    name: 'type',
    enum: TransactionType,
    required: false,
    description: 'Optional transaction type (INCOME or EXPENSE)',
  })
  @Get()
  findAll(
    @ActiveUserId() userId: string,
    @Query('month', ParseIntPipe) month: number,
    @Query('year', ParseIntPipe) year: number,
    @Query('bankAccountId', OptionalParseUUIDPipe) bankAccountId?: string,
    @Query('type', new OptionalParseEnumPipe(TransactionType))
    type?: TransactionType,
  ) {
    return this.transactionsService.findAllByUserId(userId, {
      month,
      year,
      bankAccountId,
      type,
    });
  }

  @ApiOperation({ summary: 'Update a transaction' })
  @ApiResponse({
    status: 200,
    description: 'Transaction successfully updated',
    type: ResponseTransactionDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid UUID or validation error in request body',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - token not found or invalid',
  })
  @ApiResponse({
    status: 404,
    description: 'Transaction not found',
  })
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

  @ApiOperation({ summary: 'Delete a transaction by ID' })
  @ApiResponse({
    status: 204,
    description: 'Transaction successfully deleted',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid UUID',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - token not found or invalid',
  })
  @ApiResponse({
    status: 404,
    description: 'Transaction not found',
  })
  @Delete(':transactionsId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @ActiveUserId() userId: string,
    @Param('transactionsId', ParseUUIDPipe) transactionsId: string,
  ) {
    return this.transactionsService.remove(userId, transactionsId);
  }
}
