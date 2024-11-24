import { BlogController } from './blog.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
