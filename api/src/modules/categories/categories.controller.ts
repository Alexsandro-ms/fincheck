import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ActiveUserId } from 'src/shared/decorators/activeUserId';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Categories')
@ApiHeader({
  name: 'Authorization',
  description: 'JWT token in the format: Bearer <token>',
  required: true,
})
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Search all categories' })
  @ApiResponse({
    status: 401,
    description: 'Token not found',
  })
  @ApiResponse({
    status: 200,
    description: 'Categories list',
    isArray: true,
  })
  @Get()
  findAll(@ActiveUserId() userId: string) {
    return this.categoriesService.findAllByUserId(userId);
  }
}
