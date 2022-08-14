import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return `This action adds a new user ${createUserDto}`;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a ${updateUserDto} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  // Fake user check
  check(id: number) {
    return Number.isInteger(id);
  }
}
