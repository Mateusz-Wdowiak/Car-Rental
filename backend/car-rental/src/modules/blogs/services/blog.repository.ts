import { Blog } from '../model/blog';
import { CreateBlog } from '../model/create-blog';
import { UpdateBlog } from '../model/update-blog';

export interface BlogRepository {
  getBlogList(): Promise<Blog[]>;

  getBlog(id: string): Promise<Blog>;

  createBlog(id: string, blog: CreateBlog): Promise<Blog>;

  updateBlog(id: string, blog: UpdateBlog): Promise<Blog>;

  deleteBlog(id: string): Promise<void>;
}
