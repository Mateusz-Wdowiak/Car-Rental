import { BlogService } from './blog.service';
import { Blog } from '../model/blog';
import { UpdateBlog } from '../model/update-blog';
import { CreateBlog } from '../model/create-blog';
import { BlogRepositoryImplementation } from './blog.repository.implementation';

export class BlogServiceImplementation implements BlogService {
  constructor(private readonly blogRepository: BlogRepositoryImplementation) {}

  async getBlog(id: string): Promise<Blog> {
    return this.blogRepository.getBlog(id);
  }

  async getBlogList(): Promise<Blog[]> {
    return this.blogRepository.getBlogList();
  }

  async createBlog(id: string, blog: CreateBlog): Promise<Blog> {
    return this.blogRepository.createBlog(id, blog);
  }

  async updateBlog(id: string, blog: UpdateBlog): Promise<Blog> {
    return this.blogRepository.updateBlog(id, blog);
  }

  async deleteBlog(id: string): Promise<void> {
    return this.blogRepository.deleteBlog(id);
  }
}
