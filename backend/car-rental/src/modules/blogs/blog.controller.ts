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
import { BlogServiceImplementation } from './services/blog.service.implementation';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogServiceImplementation) {}

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
    // const createBlog: CreateBlog =
    //   // this.blogMapper.mapCreateBlogDtoToCreateBlog(createBlogDto);
    // return this.blogService.createBlog(id, createBlog); //TODO mapper przed tym
  }

  @Put('/:id')
  updateBlog(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    // const updateBlog: UpdateBlog =
    // this.blogMapper.mapUpdateBlogDtoToUpdateBlog(updateBlogDto);
    // return this.blogService.updateBlog(id, updateBlog); //TODO mapper przed tym
  }

  @Delete('/:id')
  deleteBlog(@Param('id') id: string) {
    return this.blogService.deleteBlog(id);
  }
}
