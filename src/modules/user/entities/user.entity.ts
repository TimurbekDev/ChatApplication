import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "user"
})
export class User {
    @PrimaryGeneratedColumn({
        type:'integer'
    })
    id:number

    @Column({
        type: 'varchar'
    })
    full_name:string;

    @Column({
        type: 'varchar'
    })
    email:string;

    @Column({
        type: 'varchar'
    })
    password:string;
}