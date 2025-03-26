import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { ValidateCategoryOwnershipService } from './services/validate-category.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, ValidateCategoryOwnershipService],
  exports: [ValidateCategoryOwnershipService],
})
export class CategoriesModule {}
