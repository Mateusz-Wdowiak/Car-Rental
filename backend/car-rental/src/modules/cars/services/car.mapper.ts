import { CarEntity } from '../entity/car.entity';
import { Car } from '../models/car.model';
import { UpdateCar } from '../models/update-car.model';
import { CreateCar } from '../models/create-car.model';

export interface CarMapper {
  mapCarEntityToCar(carEntity: CarEntity): Car;

  mapCarsEntityToCars(carEntity: CarEntity[]): Car[];

  mapCarToCarEntity(car: Car): CarEntity;

  mapUpdateCarToCarEntity(updateCar: UpdateCar): CarEntity;

  mapCreateCarToCarEntity(createCar: CreateCar): CarEntity;
}
