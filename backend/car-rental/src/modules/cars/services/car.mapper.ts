import { CarEntity } from '../entity/car.entity';
import { Car } from '../models/car.model';

export interface CarMapper {
  mapCarEntityToCar(carEntity: CarEntity): Car;

  mapCarsEntityToCars(carEntity: CarEntity[]): Car[];

  mapCarToCarEntity(car: Car): CarEntity;
}
