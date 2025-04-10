import { ApiProperty } from '@nestjs/swagger';
import { TransactionType } from '../entities/transaction';

export class ResponseTransactionDto {
  @ApiProperty({ example: '2ff3efa8-dda0-42a5-b85d-1d5773518dc6' })
  id: string;

  @ApiProperty({ example: 'f8652e94-f4cb-49ed-a162-e59ae2890516' })
  userId: string;

  @ApiProperty({ example: '44580b0c-bdda-4ecc-87f4-77a1922ba1c9' })
  bankAccountId: string;

  @ApiProperty({ example: 'af37fff6-6e96-4444-b06b-2722c432029a' })
  categoryId: string;

  @ApiProperty({ example: 'Conta de luz' })
  name: string;

  @ApiProperty({ example: 250 })
  value: number;

  @ApiProperty({ example: '2025-02-26T20:32:09.265Z' })
  date: string;

  @ApiProperty({ example: 'EXPENSE' })
  type: TransactionType;
}
