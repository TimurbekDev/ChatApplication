import { ApiProperty } from "@nestjs/swagger";
import { ICreateUserRequest } from "../interfaces/create-user.interface";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto implements ICreateUserRequest{
    @ApiProperty({
        description:'full_name'
    })
    @IsNotEmpty()
    @IsString()
    full_name: string;

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
