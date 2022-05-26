import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class FileBlackList extends BaseEntity {
   
    @Column({primary: true})
    file_extension!: string;
}