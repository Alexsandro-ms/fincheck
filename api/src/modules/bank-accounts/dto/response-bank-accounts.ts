import { ApiProperty } from '@nestjs/swagger';
import { BankAccountType } from '../entities/bankAccount';

export class BankAccountResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  initialBalance: number;

  @ApiProperty({ enum: BankAccountType, type: String })
  type: BankAccountType;

  @ApiProperty()
  color: string;
}
