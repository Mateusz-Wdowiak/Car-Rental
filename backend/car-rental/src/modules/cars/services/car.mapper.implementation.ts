import { CarMapper } from './car.mapper';
import { CarEntity } from '../entity/car.entity';
import { Car } from '../models/car.model';
import { ObjectId } from 'mongodb';
import { UpdateCar } from '../models/update-car.model';
import { CreateCar } from '../models/create-car.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarMapperImplementation implements CarMapper {
  mapCarEntityToCar(carEntity: CarEntity): Car {
    return {
      _id: carEntity._id,
      brand: carEntity.brand,
      model: carEntity.model,
      year: carEntity.year,
      description: carEntity.description,
      type: carEntity.type,
      image: carEntity.image,
      carParameters: carEntity.carParameters,
    };
  }

  mapCarsEntityToCars(carEntity: CarEntity[]): Car[] {
    return carEntity.map(car => this.mapCarEntityToCar(car));
  }

  mapCarToCarEntity(car: Car): CarEntity {
    return {
      _id: new ObjectId().toString(),
      brand: car.brand,
      model: car.model,
      year: car.year,
      description: car.description,
      type: car.type,
      image: car.image,
      carParameters: car.carParameters,
    };
  }

  mapUpdateCarToCarEntity(updateCar: UpdateCar): CarEntity {
    return {
      _id: updateCar._id,
      brand: updateCar.brand,
      model: updateCar.model,
      year: updateCar.year,
      description: updateCar.description,
      type: updateCar.type,
      image: updateCar.image,
      carParameters: updateCar.carParameters,
    };
  }

  mapCreateCarToCarEntity(createCar: CreateCar): CarEntity {
    return {
      _id: new ObjectId().toString(),
      brand: createCar.brand,
      model: createCar.model,
      year: createCar.year,
      description: createCar.description,
      type: createCar.type,
      image: createCar.image,
      carParameters: createCar.carParameters,
    };
  }
}
