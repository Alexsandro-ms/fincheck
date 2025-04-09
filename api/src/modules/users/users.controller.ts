import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ActiveUserId } from 'src/shared/decorators/activeUserId';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Users')
@ApiHeader({
  name: 'Authorization',
  description: 'JWT token in the format: Bearer <token>',
  required: true,
})
@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @ApiOperation({ summary: 'Search user by id' })
  @ApiResponse({
    status: 401,
    description: 'Token not found',
  })
  @ApiResponse({
    status: 200,
    description: 'User list by id',
  })
  @Get('/me')
  me(@ActiveUserId() userId: string) {
    return this.UsersService.getUserById(userId);
  }
}
