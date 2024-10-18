import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities';
import { Repository } from 'typeorm';
import { ICreateUserRequest } from './interfaces/create-user.interface';
import { hash } from 'bcrypt';
import { threadId } from 'worker_threads';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo:Repository<User>){}

  async create(payload:ICreateUserRequest) {

    const user = await this.userRepo.findOne({where:{email:payload.email}})
    if(user)
      throw new BadRequestException('email already in use')
    
    const hashedPassword = await hash(payload.password, 10);
    payload.password = hashedPassword
    const newUser = this.userRepo.save(payload)

    return newUser;
  }

  async findAll() {
    return await this.userRepo.find();
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({where:{id}})
    if(!user)
      throw new NotFoundException('user not found')

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepo.findOne({where:{email}})
    if(!user)
      throw new NotFoundException('user not found')

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
