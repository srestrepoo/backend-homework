import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async update(uname, updateUser): Promise<User> {
    console.log(updateUser);
    return await  this.userModel.updateOne({username:uname}, updateUser, function(err) {}).exec();
  }

  async delete(uname): Promise<User> {
    return await  this.userModel.deleteOne({username:uname}, function(err) {}).exec();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(uname): Promise<User> {
    return await this.userModel.findOne({username:uname}, function(err,obj) {}).exec();
  }
}