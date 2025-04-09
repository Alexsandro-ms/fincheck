import {
  IsEnum,
  IsHexColor,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { BankAccountType } from '../entities/bankAccount';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBankAccountDto {
  @ApiProperty({ example: 'Nubank' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 400 })
  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  @ApiProperty({ example: 'CHECKING, INVESTIMENT ou CASH' })
  @IsNotEmpty()
  @IsEnum(BankAccountType)
  type: BankAccountType;

  @ApiProperty({ example: '#f00' })
  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;
}
