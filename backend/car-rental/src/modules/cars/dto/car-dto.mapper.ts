import { Car } from '../models/car.model';
import { CarDto } from './car.dto';
import { CreateCarDto } from './create-car.dto';
import { UpdateCarDto } from './update-car.dto';

export interface CarDtoMapper {
  mapCarsToCarsDto(cars: Car[]): CarDto[];

  mapCarToCarDto(car: Car): CarDto;

  mapCreateCarDtoToCreateCar(createCarDto: CreateCarDto): CarDto;

  mapUpdateCarDtoToUpdateCar(updateCarDto: UpdateCarDto): UpdateCarDto;
}
