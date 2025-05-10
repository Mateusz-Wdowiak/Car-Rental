import { Inject, Injectable } from '@nestjs/common';
import { Collection, Db, MongoClient } from 'mongodb';
import { User } from '../models/user.model';

@Injectable()
export class UserRentalService {
  private db: Db;
  private collection: Collection;

  constructor(
    @Inject('MONGO_CLIENT') private readonly mongoClient: MongoClient,
    private readonly carMapper: CarMapperImplementation
  ) {
    this.db = this.mongoClient.db('car-rental');
    this.collection = this.db.collection('user');
  }

  async getUserByName(username: string): Promise<User | undefined> {
    //todo metoda do wyciagania usera
  }
}
