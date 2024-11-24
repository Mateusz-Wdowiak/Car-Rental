import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('/:id')
  getBlog(@Param('id') id: string) {
    return this.blogService.getBlog(id);
  }

  @Get('/list')
  getBlogList() {
    return this.blogService.getBlogList();
  }

  @Post('/:id')
  createBlog(@Param('id') id: string, @Body() createBlogDto: CreateBlogDto) {
    return this.blogService.createBlog(id, createBlogDto);
  }

  @Put('/:id')
  updateBlog(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.updateBlog(id, updateBlogDto);
  }

  @Delete('/:id')
  deleteBlog(@Param('id') id: string) {
    return this.blogService.deleteBlog(id);
  }
}
