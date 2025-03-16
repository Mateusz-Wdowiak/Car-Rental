import { Car } from '../models/car.model';
import { CarDto } from './car.dto';
import { CreateCarDto } from './create-car.dto';
import { UpdateCarDto } from './update-car.dto';
import { CarDtoMapper } from './car-dto.mapper';

export class CarDtoMapperImplementation implements CarDtoMapper {
  constructor() {}

  mapCarsToCarsDto(cars: Car[]): CarDto[] {}

  mapCarToCarDto(car: Car): CarDto {}

  mapCreateCarDtoToCreateCar(createCarDto: CreateCarDto): CarDto {}

  mapUpdateCarDtoToUpdateCar(updateCarDto: UpdateCarDto): UpdateCarDto {}
}
