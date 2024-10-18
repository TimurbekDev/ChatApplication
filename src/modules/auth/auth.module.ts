import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports : [
    forwardRef(()=>UserModule)
  ]
})
export class AuthModule {}
