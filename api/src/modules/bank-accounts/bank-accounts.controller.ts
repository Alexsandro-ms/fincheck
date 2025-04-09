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
import { BankAccountsService } from './services/bank-accounts.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { ActiveUserId } from 'src/shared/decorators/activeUserId';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BankAccountResponseDto } from './dto/response-bank-accounts';

@ApiBearerAuth()
@ApiTags('Bank Accounts')
@ApiHeader({
  name: 'Authorization',
  description: 'JWT token in the format: Bearer <token>',
  required: true,
})
@Controller('bank-accounts')
export class BankAccountsController {
  constructor(private readonly bankAccountsService: BankAccountsService) {}

  @Post()
  @ApiOperation({ summary: 'Create account' })
  @ApiResponse({
    status: 201,
    type: CreateBankAccountDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Token not found',
  })
  create(
    @ActiveUserId() userId: string,
    @Body() createBankAccountDto: CreateBankAccountDto,
  ) {
    return this.bankAccountsService.create(userId, createBankAccountDto);
  }

  @ApiOperation({ summary: 'Search all bank accounts' })
  @ApiResponse({
    status: 401,
    description: 'Token not found',
  })
  @ApiResponse({
    status: 200,
    description: 'Bank accounts list',
    type: BankAccountResponseDto,
    isArray: true,
  })
  @Get()
  findAll(@ActiveUserId() userId: string) {
    return this.bankAccountsService.findAllByUserId(userId);
  }

  @ApiOperation({ summary: 'Search bank account by id' })
  @ApiResponse({
    status: 401,
    description: 'Token not found',
  })
  @ApiResponse({
    status: 200,
    description: 'Bank account',
    type: BankAccountResponseDto,
    isArray: false,
  })
  @Put(':bankAccountId')
  update(
    @ActiveUserId() userId: string,
    @Param('bankAccountId', ParseUUIDPipe) bankAccountId: string,
    @Body() updateBankAccountDto: UpdateBankAccountDto,
  ) {
    return this.bankAccountsService.update(
      userId,
      bankAccountId,
      updateBankAccountDto,
    );
  }
  @ApiOperation({ summary: 'Search bank account by id' })
  @ApiParam({
    name: 'bankAccountId',
    required: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Id not found',
  })
  @ApiResponse({
    status: 204,
    description: 'No content',
  })
  @Delete(':bankAccountId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @ActiveUserId() userId: string,
    @Param('bankAccountId', ParseUUIDPipe) bankAccountId: string,
  ) {
    return this.bankAccountsService.remove(userId, bankAccountId);
  }
}
