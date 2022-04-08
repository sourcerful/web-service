import axios from "axios";
import { ActivatorDTO } from "../types/activator.types";

const serverPath = "http://localhost:3001"

const paths = {
    Activator: `${serverPath}/activator`
}

export const requestPostActivator = async (data: ActivatorDTO) => {
    let res = await axios.post(paths.Activator, data)
    console.log(res)
}