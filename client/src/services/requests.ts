import axios from "axios";
import { reqBodyDTO } from "../types/types";

const serverPath = "http://localhost:3001"

const paths = {
    Activator: `${serverPath}/activator`
}

export const requestPostActivator = async (data: reqBodyDTO) => {
    let res = await axios.post(paths.Activator, data)
    console.log(res)
}