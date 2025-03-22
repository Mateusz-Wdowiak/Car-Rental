import { CarTypeEnum } from '../enums/car-type.enum';
import { CarDriveEnum } from '../enums/car-drive.enum';

export class CarParametersEntity {
  horsePower: number;
  maxSpeed: number;
  hundredSpeed: number;
  engineCapacity: number;
  drive: CarDriveEnum;
}

export class CarEntity {
  _id: string;
  brand: string;
  model: string;
  year: string;
  description?: string;
  type: CarTypeEnum;
  image: string;
  carParameters: CarParametersEntity;
}
