import { ObjectId } from 'mongodb';

export interface Car {
  _id?: ObjectId;
  make: string;
  model: string;
  year: number;
}
