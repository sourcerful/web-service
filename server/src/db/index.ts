import { DataSource } from "typeorm";
import { FileBlackList } from "./entities/FileBlackList";
import { FileInfo } from "./entities/FileInfo";
import { IPWhitelist } from "./entities/IPwhitelist";
import { MaxSize } from "./entities/MaxSize";

export const connectDatabase = async () => {
    const AppDataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "root",
        database: "postgres",
        entities: [FileBlackList, FileInfo, IPWhitelist, MaxSize],
        synchronize: true
    })
    console.log('Connected to Postgres')
    
    AppDataSource.initialize()
        .then(() => {
            console.log("Connection to database established.")
        })
        .catch((err) => {
            console.error("Error connecting to database " + err)
        })
}