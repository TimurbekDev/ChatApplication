import { AuthModule, ChatModule, UserModule } from '@modules';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password:'Timurbek123@',
      database:'chatapp',
      synchronize:true,
      autoLoadEntities:true
    }),
    ChatModule,
    AuthModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
