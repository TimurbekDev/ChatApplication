import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports : [
    TypeOrmModule.forFeature([User])
  ],
  exports : [UserService]
})
export class UserModule {}
