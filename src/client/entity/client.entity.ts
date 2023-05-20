import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('CLIENT')
export class ClientEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phoneNumber: string;

    @Column()
    countryNationalId: string;

    @Column()
    distributionStatus: string;

    @Column({default: true})
    isActive: boolean;
}