import { CarMapper } from './car.mapper';
import { CarEntity } from '../entity/car.entity';
import { Car } from '../models/car.model';
import { ObjectId } from 'mongodb';

export class CarMapperImplementation implements CarMapper {
  mapCarEntityToCar(carEntity: CarEntity): Car {
    return {
      id: carEntity.id,
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
}
