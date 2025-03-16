import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CarTypeEnum } from '../enums/car-type.enum';
import { Type } from '@nestjs/class-transformer';
import { CarDriveEnum } from '../enums/car-drive.enum';

export class CreateCarParametersDto {
  @IsNumber()
  @IsNotEmpty()
  horsePower!: number;

  @IsNumber()
  @IsNotEmpty()
  maxSpeed!: number;

  @IsNumber()
  @IsNotEmpty()
  hundredSpeed!: number;

  @IsNumber()
  @IsNotEmpty()
  engineCapacity!: number;

  @IsEnum(CarTypeEnum)
  @IsNotEmpty()
  drive!: CarDriveEnum;
}

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  brand!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  model!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  year!: string;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  description?: string;

  @IsEnum(CarTypeEnum)
  @IsNotEmpty()
  type!: CarTypeEnum;

  @IsString()
  @IsNotEmpty()
  image!: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateCarParametersDto)
  carParameters!: CreateCarParametersDto;
}
