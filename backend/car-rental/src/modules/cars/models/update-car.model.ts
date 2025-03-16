import { CarTypeEnum } from '../enums/car-type.enum';
import { CarDriveEnum } from '../enums/car-drive.enum';

export interface UpdateCarParameters {
  horsePower: number;
  maxSpeed: number;
  hundredSpeed: number;
  engineCapacity: number;
  drive: CarDriveEnum;
}

export interface UpdateCar {
  brand: string;
  model: string;
  year: string;
  description?: string;
  type: CarTypeEnum;
  image: string;
  carParameters: UpdateCarParameters;
}
