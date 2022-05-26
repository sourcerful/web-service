import axios from "axios";
import { reqBodyDTO } from "../types/types";

const serverPath = "http://localhost:3001"

const paths = {
    Activator: `${serverPath}/activator`
}

export const requestPostActivator = async (data: reqBodyDTO) => {
    console.log(data)
    let res = await axios.post(paths.Activator, data)
    console.log(res)
}

export const uploadFilesService = async (reqBody: reqBodyDTO) => {
    console.log({...reqBody})
    //check if IP and Port empty string
    if(reqBody.IP !== "" && reqBody.Port !== ""){
        reqBody.files?.map((file: File) => {
            reqBody.formData.append("files", file)
        })
        console.log(reqBody)
        const res = await axios.post(paths.Activator, reqBody, {headers: {
            "Content-Type": "multipart/form-data",
        }
        });
        console.log(res)
    }
    else
        throw new Error("Invalid form.") 
}