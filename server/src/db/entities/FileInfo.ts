import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class FileInfo extends BaseEntity {
   
    @Column({primary: true})
    file_name!: string;

    @Column()
    size!: number;
}