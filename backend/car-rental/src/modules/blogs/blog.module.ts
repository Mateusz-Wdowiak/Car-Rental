import { BlogController } from './blog.controller';
import { Module } from '@nestjs/common';
import { BlogServiceImplementation } from './services/blog.service.implementation';

@Module({
  controllers: [BlogController],
  providers: [BlogServiceImplementation],
})
export class BlogModule {}
