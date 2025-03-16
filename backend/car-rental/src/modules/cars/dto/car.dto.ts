import { IsEnum, IsNumber, IsString, ValidateNested } from 'class-validator';
import { CarTypeEnum } from '../enums/car-type.enum';
import { Type } from '@nestjs/class-transformer';
import { CarDriveEnum } from '../enums/car-drive.enum';

export class CarParametersDto {
  @IsNumber()
  horsePower!: number;

  @IsNumber()
  maxSpeed!: number;

  @IsNumber()
  hundredSpeed!: number;

  @IsNumber()
  engineCapacity!: number;

  @IsEnum(CarTypeEnum)
  drive!: CarDriveEnum;
}

export class CarDto {
  @IsString()
  brand!: string;

  @IsString()
  model!: string;

  @IsString()
  year!: string;

  @IsString()
  description?: string;

  @IsEnum(CarTypeEnum)
  type!: CarTypeEnum;

  @IsString()
  image!: string;

  @ValidateNested()
  @Type(() => CarParametersDto)
  carParameters!: CarParametersDto;
}
