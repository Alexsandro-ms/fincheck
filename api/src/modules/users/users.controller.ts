import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ActiveUserId } from 'src/shared/decorators/activeUserId';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get('/me')
  me(@ActiveUserId() userId: string) {
    return this.UsersService.getUserById(userId);
  }
}
