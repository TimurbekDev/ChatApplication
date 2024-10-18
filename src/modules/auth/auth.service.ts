import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UserService } from '../user';
import { ICreateUserRequest } from '../user/interfaces/create-user.interface';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService) private userService:UserService
  ){}

  async register(payload:ICreateUserRequest){
    const user = await this.userService.create(payload);
    return user;
  }

  async login(payload:Omit<ICreateUserRequest,'full_name'>){
    const user = await this.userService.findByEmail(payload.email);

    const isValid = await compare(payload.password,user.password)
    if(!isValid)
      throw new BadRequestException('Password or Email incorrect')
    return user;
  }
}
