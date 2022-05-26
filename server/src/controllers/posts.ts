import express, {Response, Request} from 'express'
import { Express } from 'express'
import { CustomRequest, activatorBodyFormat } from '../data.types'

// @@desc   client set activator status
// @@route  POST /activator 
export const setActivator = (req: Request<activatorBodyFormat>, res: Response) => {
    if(!req.body){
        res.status(400)
        throw new Error('Please add a text field.')
    }

    res.json({message: "set activator"});
} //Change

// @@desc   client get activator status
// @@route  GET /activator 
export const getActivator = (req: any, res: any) => {
    res.json({message: "get activator"});
}

// @@desc client updates activator status
// @@route PUT /activator
export const updateActivator = (req: any, res: any) => {
    res.json({message: `update id ${req.params.id}`});
}

// @@desc client deletes something in the activator
// @@route DELETE /activator
export const deleteActivator = (req: any, res: any) =>{
    res.json({message: `delete id ${req.params.id}`});
}
