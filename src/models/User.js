import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id = null;

    @Column("varchar")
    firstName = '';

    @Column("varchar")
    lastName = '';

    @Column("smallint")
    age = '';

}
