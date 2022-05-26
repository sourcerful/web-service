import { Entity, BaseEntity, Column } from "typeorm";

@Entity() //maybe ip: true or false for allowed or not, or maybe do white list and black list as columns.
export class IPWhitelist extends BaseEntity {
   
    @Column({primary: true})
    ip_address!: string;

    //Column allowed: boolean?
}