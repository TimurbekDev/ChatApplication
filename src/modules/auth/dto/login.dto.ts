import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ICreateUserRequest } from 'src/modules/user/interfaces/create-user.interface';

export class LoginDto implements Omit<ICreateUserRequest,'full_name'> {
    @ApiProperty({
        description: 'email'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description:'password'
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}
