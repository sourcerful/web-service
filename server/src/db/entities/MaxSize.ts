import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class MaxSize extends BaseEntity {
   
    @Column({primary: true})
    max_size!: string; //100MB for example
}