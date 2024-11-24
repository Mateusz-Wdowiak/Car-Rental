import { IsDate, IsString } from 'class-validator';

export class BlogDto {
  @IsString()
  title!: string;

  @IsString()
  content!: string;

  @IsDate()
  createdAt!: Date;

  @IsDate()
  updatedAt!: Date;
}
