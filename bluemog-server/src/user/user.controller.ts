import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { UserCreateDto } from './Dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Post()
  async signup(@Body() userCreateDto: UserCreateDto): Promise<UserModel> {
    return this.userService.createUser(userCreateDto);
  }
}
