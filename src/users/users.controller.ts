import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { ApiResponse} from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The user has been successfully created.'})
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Patch(':uname')
  async update(@Param('uname') uname: string, @Body() updateUser) {
    this.usersService.update(uname, updateUser);
  }

  @Delete(':uname')
  async delete(@Param('uname') uname: string) {
    this.usersService.delete(uname);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':uname')
  async findOne(@Param('uname') uname: string):Promise<User> {
    return this.usersService.findOne(uname);
  }
}