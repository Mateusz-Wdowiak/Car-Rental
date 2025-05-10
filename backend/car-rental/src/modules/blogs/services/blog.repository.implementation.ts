import { BlogRepository } from './blog.repository';
import { Blog } from '../model/blog';
import { CreateBlog } from '../model/create-blog';
import { UpdateBlog } from '../model/update-blog';

export class BlogRepositoryImplementation implements BlogRepository {
  constructor() {}

  getBlogList(): Promise<Blog[]> {
    return {} as Promise<Blog[]>;
  }

  getBlog(id: string): Promise<Blog> {
    return {} as Promise<Blog>;
  }

  createBlog(id: string, blog: CreateBlog): Promise<Blog> {
    return {} as Promise<Blog>;
  }

  updateBlog(id: string, blog: UpdateBlog): Promise<Blog> {
    return {} as Promise<Blog>;
  }

  deleteBlog(id: string): Promise<void> {
    return;
  }
}
