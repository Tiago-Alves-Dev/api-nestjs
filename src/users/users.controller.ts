import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Headers } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'auth/decorators/public.decorator';
import { AuthGuard } from 'auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') cod_usuario: string) {
    return this.usersService.findOne(cod_usuario);
  }

  @Patch(':id')
  update(@Param('id') cod_usuario: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(cod_usuario, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') cod_usuario: string) {
    return this.usersService.remove(cod_usuario);
  }
}
