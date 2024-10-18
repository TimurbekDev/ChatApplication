import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto:LoginDto){
    return await this.authService.login(loginDto)
  }

  @Post('register')
  async register(@Body() registerDto:RegisterDto){
    return await this.authService.register(registerDto)
  }
}