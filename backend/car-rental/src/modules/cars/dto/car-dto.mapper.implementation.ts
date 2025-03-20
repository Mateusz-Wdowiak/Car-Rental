import { Car } from '../models/car.model';
import { CarDto } from './car.dto';
import { CreateCarDto } from './create-car.dto';
import { UpdateCarDto } from './update-car.dto';
import { CarDtoMapper } from './car-dto.mapper';

export class CarDtoMapperImplementation implements CarDtoMapper {
  constructor() {}

  mapCarsToCarsDto(cars: Car[]): CarDto[] {
    return cars.map(car => this.mapCarToCarDto(car));
  }

  mapCarToCarDto(car: Car): CarDto {
    return {
      brand: car.brand,
      model: car.model,
      year: car.year,
      description: car.description,
      type: car.type,
      image: car.image,
      carParameters: car.carParameters,
    };
  }

  mapCreateCarDtoToCreateCar(createCarDto: CreateCarDto): CarDto {
    return {
      brand: createCarDto.brand,
      model: createCarDto.model,
      year: createCarDto.year,
      description: createCarDto.description,
      type: createCarDto.type,
      image: createCarDto.image,
      carParameters: createCarDto.carParameters,
    };
  }

  mapUpdateCarDtoToUpdateCar(updateCarDto: UpdateCarDto): UpdateCarDto {
    return {
      id: updateCarDto.id,
      brand: updateCarDto.brand,
      model: updateCarDto.model,
      year: updateCarDto.year,
      description: updateCarDto.description,
      type: updateCarDto.type,
      image: updateCarDto.image,
      carParameters: updateCarDto.carParameters,
    };
  }
}
